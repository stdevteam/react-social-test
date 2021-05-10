import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import {request} from "../../../utils/request"

export default function PostForm({data}) {
  const [values, setValues] = useState({
    title: '',
    text: '',
  });

  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    if(data) setValues(data)
  }, [data]);

  const handleTitleInputChange = event => {
    setValues({...values, title: event.target.value})
  };

  const handleTextInputChange = event => {
    setValues({...values, text: event.target.value})
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!values.title || !values.text) return;
    let endpoint = '/posts/';
    let method = "POST";
    let body = values;

    if(data) {
      endpoint = `${'/posts/' + values.id + '/'}`;
      method = "PUT";
      body = values;
    }
    const resp = await request(endpoint, method, body)
    if (resp) setSuccessMessage(true)
    if(!data) {
      setValues({
        title: '',
        text: ''
      })
    }
  }

  return (
    <form className={"postForm"} onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={values?.title}
          onChange={handleTitleInputChange}/>
      </div>
      <div className="form-group">
        <label>Text</label>
        <textarea
          value={values?.text}
          rows='7'
          onChange={handleTextInputChange}>
        </textarea>
      </div>
      {successMessage && <span>Success</span>}
      <div className="form-group">
        <button>Save</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}
