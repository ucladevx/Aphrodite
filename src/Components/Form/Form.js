import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionTypes from "../../Actions/formAction";
import "./Form.css";
import { Link } from "react-router-dom";

var majors = [  
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
]

// TO DO:
// make name, major (?) required input fields
// change start term to be two drop down menus (Fall, Winter, Spring and the year)
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
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
    const result = [this.state.name, this.state.major, this.state.year];
    this.props.onUpdateForm(result);

    window.location = '/main';
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
    return (
      <div className="form-group">
        <input
          type="text"
          id={formTitle}
          className="form-control"
          required
          name={formTitle}
          value={this.state[{ formTitle }]}
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
      })
  };
};

export default connect(
  null, mapDispatchToProps
)(Form);
