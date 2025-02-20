import React, { useState } from 'react';
import './styles.css'; // Import file CSS

const QuestionApp = () => {
    // Danh sách câu hỏi, mật mã và hình ảnh tương ứng
    const questions = [
      {
        id: 1,
        question: "Câu hỏi 1: Mật mã là gì?",
        password: "asd",
        image: "image/1.png",
      },
      {
        id: 2,
        question: "Câu hỏi 2: Mật mã là gì?",
        password: "world",
        image: "image/2.png",
      },
      {
        id: 3,
        question: "Câu hỏi 3: Mật mã là gì?",
        password: "longbien2025",
        image: "image/4.png",
      },
      {
        id: 4,
        question: "Câu hỏi 4: Mật mã là gì?",
        password: "password",
        image: "image/3.png",
      },
    ];
  
    // State để lưu trữ mật mã nhập vào cho từng câu hỏi
    const [passwords, setPasswords] = useState(Array(questions.length).fill(""));
    // State để lưu trữ hình ảnh hiển thị
    const [currentImage, setCurrentImage] = useState(null);
    // State để lưu trữ thông báo lỗi
    const [message, setMessage] = useState("");
  
    // Xử lý khi người dùng nhập mật mã
    const handlePasswordChange = (index, value) => {
      const newPasswords = [...passwords];
      newPasswords[index] = value;
      setPasswords(newPasswords);
    };
  
    // Xử lý khi người dùng xác nhận mật mã
    const handleSubmit = (index) => {
      const enteredPassword = passwords[index];
      const correctPassword = questions[index].password;
  
      if (enteredPassword === correctPassword) {
        setCurrentImage(questions[index].image); // Hiển thị hình ảnh tương ứng
        setMessage(""); // Xóa thông báo lỗi
      } else {
        setMessage("Mật mã không đúng. Vui lòng thử lại!");
      }
    };
  
    return (
      <div className="container">
        {currentImage ? (
          <img
            src={currentImage}
            alt="Correct Answer"
            className="fullscreen-image"
          />
        ) : (
          <>
            <h1>Nhập mật mã cho từng câu hỏi</h1>
            {questions.map((q, index) => (
              <div key={q.id} className="question">
                <p>{q.question}</p>
                <input
                  type="text"
                  value={passwords[index]}
                  onChange={(e) => handlePasswordChange(index, e.target.value)}
                  placeholder="Nhập mật mã"
                />
                <button onClick={() => handleSubmit(index)}>Xác nhận</button>
              </div>
            ))}
            {message && <p className="message">{message}</p>}
          </>
        )}
      </div>
    );
  };
  
  export default QuestionApp;