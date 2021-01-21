export default function Reducer(state, action) {
  console.log("reducer state default:", state);

  switch (action.type) {
    case "FORM_INPUT_CHANGE":
      return {
        ...state,
        form: action.form,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.loading,
      };
    case "ERROR":
      return {
        ...state,
        error: action.error,
      };
    case "BTN_REGISTER_CLICK":
      if (state.loading) {
        alert("Bạn không thể gửi liên tục");
        return state;
      }
      let error = {};
      let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let regexUrlFacebook = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
      let regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

      if (!state.form.username) {
        error["username"] = "Username không được để trống";
      }
      if (!state.form.phone) {
        error["phone"] = "Số điện thoại không được để trống";
      } else if (!regexPhone.test(state.form.phone)) {
        error["phone"] = "Số điện thoại không chính xác";
      }
      if (!state.form.email) {
        error["email"] = "Email không được để trống";
      } else if (!regexEmail.test(state.form.email)) {
        error["email"] = "Email không đúng định dạng";
      }
      if (!state.form.facebook) {
        error["facebook"] = "Facebook không được để trống";
      } else if (!regexUrlFacebook.test(state.form.facebook)) {
        error["facebook"] = "Facebook không đúng định dạng";
      }
      if (Object.keys(error).length === 0) {
        action.successCallback();
      }
      return {
        ...state,
        error,
      };
  }

  return state;
}
