"use server";

import prisma from "@/prisma/client";

export const getPosts = async () => {
  "use server";
  const posts = await prisma.post.findMany({});
  return posts;
};

export const createPost = async (state: any, payload: FormData) => {
  const data = {
    author: payload.get("author")!.toString(),
    title: payload.get("title")!.toString(),
    content: payload.get("content")!.toString(),
  };

  await prisma.post.create({ data }).catch((err) => {
    return {
      message: "ERROR",
    };
  });

  return {
    message: "CREATED",
  };
};
