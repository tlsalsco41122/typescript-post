import { Request, Response } from "express";
import { createDataService } from "../services/post.service";

export const createData = async (req: Request, res: Response): Promise<void> => {  // 비동기 함수"이고(Promise), 아무 값도 반환하지 않는다(void)
  try {
    const { title, content } = req.body; // body에서 가져오기

    if (!title || !content) { // title이나 content가 없을 경우
      res.status(400).json({ message: "title과 content를 입력하세요." });
      return;
    }

    await createDataService({ title, content }); // 비동기 작업

    // db에 저장되고 실행됨 -> await이 없었다면 비동기 끝나기 전에 실행될 수도...
    res.status(200).json({ message: "데이터 삽입 성공" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
