import React, { useState } from "react";

const UserDataForm = ({ startQuizzHandler }) => {
  const [formData, setFormData] = useState({ name: "", group: "" });

  const [startNewQuizNow, setStartNewQuizNow] = useState(false);

  const onChangeHandler = (e) => {
    const property = e.target.name;
    // e.target.name // name || group
    // e.target.value // wartosc
    setFormData({
      ...formData,
      [property]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.group) {
      localStorage.setItem("name", formData.name);
      localStorage.setItem("group", formData.group);
      localStorage.setItem("quizzEnabled", true);
      startQuizzHandler("true");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="quiz">
        <div className="container">
          <div className="quiz__box">
            <div className="quiz__box--form">
              <label>Jak masz na imię?</label>
              <input
                value={formData.name}
                type="text"
                name="name"
                placeholder="Wpisz imię"
                onChange={onChangeHandler}
              />
            </div>
            <div className="quiz__box--form">
              <label>Grupa, którą chcesz zbadać, to:</label>
              <input
                value={formData.group}
                type="text"
                name="group"
                placeholder="Nazwa grupy"
                onChange={onChangeHandler}
              />
            </div>
            <button className="btn quiz__box--form" type="submit">
              Przejdź do quizu
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserDataForm;
