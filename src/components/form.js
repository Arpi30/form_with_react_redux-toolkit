import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/form-slice";

export const Form = () => {
  const dispatch = useDispatch(); // You can use the reducer action with the dispatch functions
  const userName = useSelector((state) => state.form.userName); // select the redux initialState property
  const password = useSelector((state) => state.form.password);
  const isValid = useSelector((state) => state.form.isValid);

  const handleUsernameChange = (e) => {
    dispatch(formActions.updateUsername(e.target.value));
    if (e.target.value.length <= 3) {
      dispatch(formActions.updateIsValid({ userName: false }));
    } else {
      dispatch(formActions.updateIsValid({ userName: true }));
    }
  };

  const handlePasswordChange = (e) => {
    dispatch(formActions.updatePassword(e.target.value));
    if (e.target.value.length < 5) {
      dispatch(formActions.updateIsValid({ password: false }));
    } else {
      dispatch(formActions.updateIsValid({ password: true }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid.userName || !isValid.password) {
      alert("Invalid username or password length");
      dispatch(formActions.clearInputField());
      return;
    }
    alert(`username: ${userName}, password: ${password}`);
    dispatch(formActions.clearInputField());
  };
  console.log(isValid);
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <div className="d-flex flex-row justify-content-between">
          <label htmlFor="id" className="form-label">
            UserName
          </label>
          {!isValid.userName && (
            <span className="text-danger">Incorrect username length</span>
          )}
        </div>
        <input
          name="userName"
          onChange={handleUsernameChange}
          type="text"
          className="form-control"
          id="id"
          value={userName}
        />
      </div>
      <div className="mb-3">
        <div className="d-flex flex-row justify-content-between">
          <label htmlFor="pass" className="form-label">
            Password
          </label>
          {!isValid.password && (
            <span className="text-danger">Incorrect password length</span>
          )}
        </div>
        <input
          name="password"
          onChange={handlePasswordChange}
          type="password"
          className="form-control"
          id="pass"
          value={password}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
