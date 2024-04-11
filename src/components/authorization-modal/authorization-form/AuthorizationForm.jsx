import { useState } from "react";
import "./AuthorizationForm.css";
import Select from "react-select";
import { options1, options2, options3 } from "./../../../date";
import makeAnimated from "react-select/animated";
const animateComponents = makeAnimated();

const AuthorizationForm = () => {
  const [disableSelect, setDisableSelect] = useState(true);

  // const selectDiv = document.getElementById("select-div");
  // const selectCount = selectDiv.getElementsByTagName("select");
  // for (let i = 0; i < selectCount.length; i++) {
  //   selectCount[i].addEventListener("change", function () {
  //     this.nextElementSibling.disabled = false;
  //   });
  // }

  return (
    <form action="GET" className="select-form" id="select-div">
      <div className="select-wrapper">
        <div className="select-block">
          <p className="select-label">SELECT A REGION</p>

          <Select
            classNamePrefix="custom-select"
            options={options1}
            isSearchable={false}
            placeholder="your choice"
            components={animateComponents}
            // menuIsOpen={true}
          />
        </div>

        <div className="select-block">
          <p className="select-label">SELECT A MARKET</p>

          <Select
            classNamePrefix="custom-select"
            options={options2}
            isSearchable={false}
            placeholder="your choice"
            components={animateComponents}
          />
        </div>

        <div className="select-block">
          <p className="select-label">SELECT A LANGUAGE</p>

          <Select
            classNamePrefix="custom-select"
            options={options3}
            isSearchable={false}
            placeholder="your choice"
            components={animateComponents}
          />
        </div>
      </div>
      <button disabled className="select-cnp">
        CONTINUE
      </button>
    </form>
  );
};

export default AuthorizationForm;
