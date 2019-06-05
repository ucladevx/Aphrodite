import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionTypes from "../../Actions/formAction";
import * as classActionTypes from "../../Actions/classesAction";
import "./Form.css";
import {Link} from "react-router-dom";
const axios = require("axios");

const majors = [
  "Aerospace Studies",
  "African American Studies",
  "African Studies",
  "American Indian Studies",
  "American Sign Language",
  "Ancient Near East",
  "Anesthesiology",
  "Anthropology",
  "Applied Linguistics",
  "Arabic",
  "Archaeology",
  "Architecture and Urban Design",
  "Armenian",
  "Art",
  "Art History",
  "Arts and Architecture",
  "Arts Education",
  "Asian",
  "Asian American Studies",
  "Astronomy",
  "Atmospheric and Oceanic Sciences",
  "Bioengineering",
  "Bioinformatics",
  "Bioinformatics",
  "Biological Chemistry",
  "Biomathematics",
  "Biomedical Research",
  "Biostatistics",
  "Chemical Engineering",
  "Chemistry and Biochemistry",
  "Chicana and Chicano Studies",
  "Chinese",
  "Civic Engagement",
  "Civil and Environmental Engineering",
  "Classics",
  "Clusters",
  "Communication",
  "Community Health Sciences",
  "Comparative Literature",
  "Computational and Systems Biology",
  "Computer Science",
  "Conservation of Archaeological and Ethnographic Materials",
  "Dance",
  "Dentistry",
  "Design / Media Arts",
  "Digital Humanities",
  "Disability Studies",
  "Dutch",
  "Earth, Planetary, and Space Sciences",
  "Ecology and Evolutionary Biology",
  "Economics",
  "Education",
  "Electrical and Computer Engineering",
  "Engineering",
  "English",
  "English as A Second Language",
  "English Composition",
  "Environment",
  "Environmental Health Sciences",
  "Epidemiology",
  "Ethnomusicology",
  "Family Medicine",
  "Filipino",
  "Film and Television",
  "Food Studies",
  "French",
  "Gender Studies",
  "Geography",
  "German",
  "Gerontology",
  "Global Health",
  "Global Jazz Studies",
  "Global Studies",
  "Graduate Student Professional Development",
  "Greek",
  "Health Policy and Management",
  "Hebrew",
  "Hindi-Urdu",
  "History",
  "Honors Collegium",
  "Human Genetics",
  "Hungarian",
  "Indigenous Languages of the Americas",
  "Indo-European Studies",
  "Indonesian",
  "Information Studies",
  "International and Area Studies",
  "International Development Studies",
  "International Migration Studies",
  "Iranian",
  "Islamic Studies",
  "Italian",
  "Japanese",
  "Jewish Studies",
  "Korean",
  "Labor and Workplace Studies",
  "Latin",
  "Latin American Studies",
  "Law",
  "Lesbian, Gay, Bisexual, Transgender, and Queer Studies",
  "Life Sciences",
  "Linguistics",
  "Management",
  "Management-Executive MBA",
  "Management-Master of Financial Engineering",
  "Management-Master of Science in Business Analytics",
  "Management-PhD",
  "Materials Science and Engineering",
  "Mathematics",
  "Mechanical and Aerospace Engineering",
  "Medical History",
  "Medicine",
  "Microbiology, Immunology, and Molecular Genetics",
  "Middle Eastern Studies",
  "Military Science",
  "Molecular and Medical Pharmacology",
  "Molecular Biology",
  "Molecular Toxicology",
  "Molecular, Cell, and Developmental Biology",
  "Molecular, Cellular, and Integrative Physiology",
  "Music",
  "Music Industry",
  "Musicology",
  "Naval Science",
  "Near Eastern Languages",
  "Neurobiology",
  "Neurology",
  "Neuroscience",
  "Neuroscience",
  "Neurosurgery",
  "Nursing",
  "Obstetrics and Gynecology",
  "Ophthalmology",
  "Oral Biology",
  "Orthopaedic Surgery",
  "Pathology and Laboratory Medicine",
  "Pediatrics",
  "Philosophy",
  "Physics",
  "Physics and Biology in Medicine",
  "Physiological Science",
  "Physiology",
  "Polish",
  "Political Science",
  "Portuguese",
  "Program in Computing",
  "Psychiatry and Biobehavioral Sciences",
  "Psychology",
  "Public Affairs",
  "Public Health",
  "Public Policy",
  "Radiation Oncology",
  "Religion, Study of",
  "Romanian",
  "Russian",
  "Scandinavian",
  "Science Education",
  "Semitic",
  "Serbian/Croatian",
  "Slavic",
  "Social Science",
  "Social Thought",
  "Social Welfare",
  "Society and Genetics",
  "Sociology",
  "South Asian",
  "Southeast Asian",
  "Spanish",
  "Statistics",
  "Surgery",
  "Swahili",
  "Thai",
  "Theater",
  "Turkic Languages",
  "University Studies",
  "Urban Planning",
  "Urology",
  "Vietnamese",
  "World Arts and Cultures",
  "Yiddish"
];

const sample = {
  "search": {
      "id": "search",
      "title": "temporary",
      "classIds": [
          "c1",
          "c2",
          "c3",
          "c4",
          "c5",
          "c6",
          "c7",
          "c8",
          "c9",
          "c10",
          "c11",
          "c12",
          "c13",
          "c14",
          "c15",
          "c16",
          "c17",
          "c18",
          "c19",
          "c20",
          "c21",
          "c22",
          "c23",
          "c24",
          "c25",
          "c26",
          "c27",
          "c28",
          "c29",
          "c30",
          "c31",
          "c32",
          "c33",
          "c34",
          "c35",
          "c36",
          "c37",
          "c38",
          "c39",
          "c40",
          "c41",
          "c42",
          "c43",
          "c44",
          "c45",
          "c46",
          "c47",
          "c48",
          "c49",
          "c50",
          "c51",
          "c52"
      ]
  },
  "classes": {
      "c1": {
          "id": "c1",
          "dept": "COM SCI",
          "name": "19"
      },
      "c2": {
          "id": "c2",
          "dept": "COM SCI",
          "name": "31"
      },
      "c3": {
          "id": "c3",
          "dept": "COM SCI",
          "name": "32"
      },
      "c4": {
          "id": "c4",
          "dept": "COM SCI",
          "name": "33"
      },
      "c5": {
          "id": "c5",
          "dept": "COM SCI",
          "name": "35L"
      },
      "c6": {
          "id": "c6",
          "dept": "COM SCI",
          "name": "M51A"
      },
      "c7": {
          "id": "c7",
          "dept": "COM SCI",
          "name": "88S"
      },
      "c8": {
          "id": "c8",
          "dept": "COM SCI",
          "name": "111"
      },
      "c9": {
          "id": "c9",
          "dept": "COM SCI",
          "name": "112"
      },
      "c10": {
          "id": "c10",
          "dept": "COM SCI",
          "name": "118"
      },
      "c11": {
          "id": "c11",
          "dept": "COM SCI",
          "name": "M119"
      },
      "c12": {
          "id": "c12",
          "dept": "COM SCI",
          "name": "CM122"
      },
      "c13": {
          "id": "c13",
          "dept": "COM SCI",
          "name": "130"
      },
      "c14": {
          "id": "c14",
          "dept": "COM SCI",
          "name": "131"
      },
      "c15": {
          "id": "c15",
          "dept": "COM SCI",
          "name": "143"
      },
      "c16": {
          "id": "c16",
          "dept": "COM SCI",
          "name": "M146"
      },
      "c17": {
          "id": "c17",
          "dept": "COM SCI",
          "name": "M151B"
      },
      "c18": {
          "id": "c18",
          "dept": "COM SCI",
          "name": "M152A"
      },
      "c19": {
          "id": "c19",
          "dept": "COM SCI",
          "name": "152B"
      },
      "c20": {
          "id": "c20",
          "dept": "COM SCI",
          "name": "161"
      },
      "c21": {
          "id": "c21",
          "dept": "COM SCI",
          "name": "168"
      },
      "c22": {
          "id": "c22",
          "dept": "COM SCI",
          "name": "174A"
      },
      "c23": {
          "id": "c23",
          "dept": "COM SCI",
          "name": "180"
      },
      "c24": {
          "id": "c24",
          "dept": "COM SCI",
          "name": "181"
      },
      "c25": {
          "id": "c25",
          "dept": "COM SCI",
          "name": "CM187"
      },
      "c26": {
          "id": "c26",
          "dept": "COM SCI",
          "name": "188"
      },
      "c27": {
          "id": "c27",
          "dept": "COM SCI",
          "name": "192"
      },
      "c28": {
          "id": "c28",
          "dept": "COM SCI",
          "name": "192A"
      },
      "c29": {
          "id": "c29",
          "dept": "COM SCI",
          "name": "201"
      },
      "c30": {
          "id": "c30",
          "dept": "COM SCI",
          "name": "205"
      },
      "c31": {
          "id": "c31",
          "dept": "COM SCI",
          "name": "216"
      },
      "c32": {
          "id": "c32",
          "dept": "COM SCI",
          "name": "217B"
      },
      "c33": {
          "id": "c33",
          "dept": "COM SCI",
          "name": "218"
      },
      "c34": {
          "id": "c34",
          "dept": "COM SCI",
          "name": "CM222"
      },
      "c35": {
          "id": "c35",
          "dept": "COM SCI",
          "name": "M229S"
      },
      "c36": {
          "id": "c36",
          "dept": "COM SCI",
          "name": "230"
      },
      "c37": {
          "id": "c37",
          "dept": "COM SCI",
          "name": "236"
      },
      "c38": {
          "id": "c38",
          "dept": "COM SCI",
          "name": "239"
      },
      "c39": {
          "id": "c39",
          "dept": "COM SCI",
          "name": "240A"
      },
      "c40": {
          "id": "c40",
          "dept": "COM SCI",
          "name": "247"
      },
      "c41": {
          "id": "c41",
          "dept": "COM SCI",
          "name": "249"
      },
      "c42": {
          "id": "c42",
          "dept": "COM SCI",
          "name": "259"
      },
      "c43": {
          "id": "c43",
          "dept": "COM SCI",
          "name": "262A"
      },
      "c44": {
          "id": "c44",
          "dept": "COM SCI",
          "name": "264A"
      },
      "c45": {
          "id": "c45",
          "dept": "COM SCI",
          "name": "269"
      },
      "c46": {
          "id": "c46",
          "dept": "COM SCI",
          "name": "275"
      },
      "c47": {
          "id": "c47",
          "dept": "COM SCI",
          "name": "280D"
      },
      "c48": {
          "id": "c48",
          "dept": "COM SCI",
          "name": "CM287"
      },
      "c49": {
          "id": "c49",
          "dept": "COM SCI",
          "name": "289A"
      },
      "c50": {
          "id": "c50",
          "dept": "COM SCI",
          "name": "289CO"
      },
      "c51": {
          "id": "c51",
          "dept": "COM SCI",
          "name": "298"
      },
      "c52": {
          "id": "c52",
          "dept": "COM SCI",
          "name": "375"
      }
  }
};

// TO DO:
// make name, major (?) required input fields
// change start term to be two drop down menus (Fall, Winter, Spring and the year)
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.location.state.name,
      major: "",
      year: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value // updates the state key corresponding to the given input field
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onUpdateForm(this.state);
    console.log("here")
    const formData = {"department": this.state.major};

    axios.post("http://localhost:3001/post/initDeptTiles", formData)
            .then((response) => {
                console.log("response", response.data)
                this.props.onLoadClass(response.data);
            }).catch((error) => {
              console.log("error", error);
              //this.props.onLoadClass(sample);       ///REMOVE THIS LINE
        });
    console.log("done")
  }

  createMajorForm(formTitle) {
    return (
      <div className="form-group">
        <select
          id={formTitle}
          name={formTitle}
          required
          className="form-control"
          onChange={this.handleInputChange}
          >
            <option value=""></option>
            {majors.map(v =>
              <option value={v}>{v}</option>
            )}
        </select>
        <label className="form-control-placeholder" htmlFor={formTitle}>
          {formTitle}
        </label>
      </div>
    );
  }
  createForm(formTitle) {
      var val = ""
      if(formTitle == "name") val = this.state.name
      if(formTitle == "major") val = this.state.major
      if(formTitle == "year") val = this.state.year
    return (
      <div className="form-group">
        <input
          type="text"
          id={formTitle}
          className="form-control"
          required
          name={formTitle}
          value={val}
          onChange={this.handleInputChange}
        />
        <label className="form-control-placeholder" htmlFor={formTitle}>
          {formTitle}
        </label>
      </div>
    );
  }
  /*
<div className="form-field">
        <input
          className="input"
          name={formTitle}
          placeholder={formTitle}
          type="text"
          value={this.state[{ formTitle }]}
          onChange={this.handleInputChange}
        />
      </div>
*/
  render() {
    return (
        <div style={{backgroundColor: 'powderblue'}}>
      <div>
        <div className="registration-form">
          {this.createForm("name")}
          {this.createMajorForm("major")}
          {this.createForm("year")}

          <input hidden type="submit" />
          <button
            className="registration-button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Register
          </button>
          <Link
            className="registration-button"
            type="submit"
            to='/main'
          >
            go to main page
          </Link>
        </div>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpdateForm: result =>
      dispatch({
        type: actionTypes.UPDATE_FORM,
        form: result
      }),
    onLoadClass: result =>
      dispatch({
        type: classActionTypes.LOAD_CLASS,
        result: result
      })
  };
};

export default connect(
  null, mapDispatchToProps
)(Form);
