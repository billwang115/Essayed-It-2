import styles from "./WelcomePage.module.css";
import reviewIcon from "../../assets/reviewIcon.png";
import requestIcon from "../../assets/requestIcon.png";
import creditIcon from "../../assets/diamondIcon.png";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login, register } = useContext(AuthContext);

  const handleLogin = async () => {
    await login(loginInfo);
    navigate("/reviewEssays");
  };

  const handleRegister = async () => {
    await register(registerInfo);
    navigate("/reviewEssays");
  };

  const handleEnter = (e, inputType) => {
    if (e.key === "Enter" && inputType === "login") {
      handleLogin();
    } else if (e.key === "Enter") {
      handleRegister();
    }
  };

  return (
    <div className={styles.welcomePageContainer}>
      <div className={styles.loginContainer}>
        <div className={styles.loginRow}>
          <span className={styles.loginText}>Log In</span>
          <div className={styles.loginInputs}>
            <input
              type="text"
              placeholder="username"
              className={styles.loginField}
              value={loginInfo.username}
              onInput={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="password"
              className={styles.loginField}
              value={loginInfo.password}
              onInput={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
              onKeyPress={(e) => handleEnter(e, "login")}
            />
            <button className={styles.loginButton} onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>

      <div className={styles.loginContainer}>
        <div className={styles.loginRow}>
          <span className={styles.loginText}>Register</span>
          <div className={styles.loginInputs}>
            <input
              type="text"
              placeholder="username"
              className={styles.loginField}
              value={registerInfo.username}
              onInput={(e) =>
                setRegisterInfo({ ...registerInfo, username: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="password"
              className={styles.loginField}
              value={registerInfo.password}
              onInput={(e) =>
                setRegisterInfo({ ...registerInfo, password: e.target.value })
              }
              onKeyPress={(e) => handleEnter(e, "register")}
            />
            <button className={styles.loginButton} onClick={handleRegister}>
              Register
            </button>
          </div>
        </div>
      </div>

      <div className={styles.welcomePageContent}>
        <div className={styles.essayTemplateWindow}>
          <div className={styles.essayText}>
            Education means considerably more than just teaching a student to
            read, write, and manipulate numbers. Computers, the Internet, and
            advanced electronic devices are becoming essential in everyday life
            and have changed the way information is gathered. How this new
            technology is utilized in the curriculum and managed by teachers
            will have an important role to play in widening the resource and
            knowledge base for all students. <br />
            <br />
            Technology affects the way teachers teach and students learn. To
            make the best use of information technology (IT), schools need a
            workable plan to fully integrate it into all aspects of the
            curriculum so students are taught how, why, and when to use
            technology to further enhance their learning.
            <br />
            <br />
            If a school does not have a clear plan of how and why it wishes to
            implement IT, then it runs the risk of wasting money. In schools
            today, nearly all classrooms have access to a computer. However,
            many schools mistake this as incorporating information technology
            into the curriculum. School staff need to research what IT is
            available and what would best serve the school's purpose, not simply
            purchase the latest equipment. There should be a policy stating how
            IT is going to assist pupils' development and what teachers want
            pupils to achieve (Reksten, 2000). Staff members need to be clear
            about what they want IT to do for them before they can start
            incorporating it into their lessons.
            <br />
            <br />
            The only way information technology is going to be useful to schools
            is if all staff members are well-informed and fully supported. It is
            the principal's responsibility, and should be part of the school's
            plan, to ensure that all staff are consulted about the changes, and
            that the change is carefully organised. Some teachers may be
            resistant, especially if they have not had much experience with
            computers, so training teachers is essential in implementing IT into
            the school curriculum. Staff members must feel involved in the
            process of acquiring technology, and in learning how to operate it,
            in order for them to increase their confidence in using IT as a
            curriculum tool. Teachers are only going to be able to incorporate
            IT into their lessons if they are competent users themselves
            (Reksten, 2000).
            <br />
            <br />
            In addition, teachers need to be aware that IT within the classroom
            is extremely flexible, but that they need to plan what purpose IT
            serves in each lesson. The skills a child learns are the important
            part of any lesson, and it is the same with technology. IT needs to
            be used and understood in all subjects in the same way as the
            ability to read is necessary for all subjects, and “must be used
            across the curriculum, in the same way that a pen and pencie used in
            most subject areas” (Ager, 2000, p. 15). The best way to plan the
            use of IT in the classroom is to approach it as simply a learning
            tool that is more advanced (and more exciting) than the traditional
            pen and paper.
          </div>
        </div>

        <div className={styles.titleContainer}>
          <h1 className={styles.pageTitle}>Essayed It</h1>
          <div className={styles.pageSubtitle}>
            Join Essayed It and be a part of the largest essay peer-review
            network in the world
          </div>

          <div className={styles.featuresContainer}>
            <div className={styles.feature}>
              <img
                src={reviewIcon}
                alt="review-Icon"
                className={styles.featureIcon}
              />
              <div className={styles.featureText}>Review Essays</div>
            </div>
            <div className={styles.feature}>
              <img
                src={requestIcon}
                alt="request-Icon"
                className={styles.featureIcon}
              />
              <div className={styles.featureText}>Request Reviews</div>
            </div>
            <div className={styles.feature}>
              <img
                src={creditIcon}
                alt="credit-Icon"
                className={styles.featureIcon}
              />
              <div className={styles.featureText}>Earn Credits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
