import pool from "../db/mysql";

// 인터페이스 정의
interface PostData {
  title: string;
  content: string;
}

export const createDataService = async (data: PostData): Promise<void> => {
  try {
    const { title, content } = data; // 받은 데이터에서 꺼내기
    console.log("입력 데이터:", title, content);

    // 비동기 작업
    const [results] = await pool.query(
      "INSERT INTO tb_post (title, content) VALUES (?, ?)",
      [title, content]
    );

    console.log("데이터 삽입 성공:", results);
  } catch (error: any) {
    console.error("데이터 삽입 중 오류:", error.message);
    throw new Error(error.message);
  }
};
