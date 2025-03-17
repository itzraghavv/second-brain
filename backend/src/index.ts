import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import { random, ValidationSchema } from "./lib/util";
import { ContentModel, LinkModel, UserModel } from "./db/schema";
import { auth } from "./middlewares/auth";
import { JWT_SECRET } from "./config";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.post("/api/v1/sign-up", async (req, res) => {
  ValidationSchema.parse(req.body);

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const hashedPass = await bcrypt.hash(password, 10);

    await UserModel.create({
      username: username,
      password: hashedPass,
      email: email,
    });

    res.json({
      message: "User created",
    });
  } catch (e) {
    res.json({
      message: "User already exist",
    });
  }
});

app.post("/api/v1/sign-in", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await UserModel.findOne({
      username,
    });

    if (!user) {
      res.status(403).json({
        message: "User not Found",
      });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = await jwt.sign(
        {
          id: user._id.toString(),
        },
        JWT_SECRET
      );
      res.json({
        message: "Signed In",
        token: token,
      });
    } else {
      res.json({
        message: "Invalid pass",
      });
    }
  } catch (e) {
    res.json({
      error: "You Signed in Failed",
    });
  }
});

app.post("/api/v1/content", auth, async (req, res) => {
  const title = req.body.title;
  const link = req.body.link;

  await ContentModel.create({
    title,
    link,
    userId: req.userId,
    tag: [],
  });

  res.json({
    message: "Content Added",
  });
});

app.get("/api/v1/content", auth, async (req, res) => {
  const userId = req.userId;
  const content = await ContentModel.find({
    userId: userId,
  }).populate("userId", "username");

  res.json({
    message: content,
  });
});

app.delete("/api/v1/content", auth, async (req, res) => {
  const userId = req.userId;
  const contentId = req.body.contentId;

  try {
    const content = await ContentModel.findOne({
      _id: contentId,
    });

    if (!content) {
      res.status(404).json({
        message: "The content not found",
      });
      return;
    }

    if (content?.userId !== userId) {
      res.status(403).json({
        message: "You are unauthorized to delete this content",
      });
      return;
    }

    await ContentModel.deleteOne({
      _id: contentId,
      userId: userId,
    });

    res.status(200).json({
      message: "Content Deleted",
    });
  } catch (e) {
    res.json({
      error: "Error occured while deleting",
    });
  }
});

app.post("/api/v1/share", auth, async (req, res) => {
  const share = req.body.share;

  if (share) {
    const link = await LinkModel.findOne({
      userId: req.userId,
    });

    if (link) {
      res.json({
        hash: link.hash,
      });
      return;
    }

    const hash = random(10);
    await LinkModel.create({
      userId: req.userId,
      hash: hash,
    });

    res.json({
      message: hash,
    });
  } else {
    await LinkModel.deleteOne({
      userId: req.userId,
    });

    res.json("Removed Link");
  }
});

app.get("/api/v1/:sharelink", async (req, res) => {
  const hash = req.params.sharelink;

  const link = await LinkModel.findOne({
    hash: hash,
  });

  if (!link) {
    res.status(411).json({
      message: "Invalid Link",
    });
    return;
  }

  const user = await UserModel.findOne({
    _id: link?.userId,
  });

  const content = await ContentModel.find({
    userId: link.userId,
  });

  res.json({
    username: user?.username,
    content: content,
  });
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
