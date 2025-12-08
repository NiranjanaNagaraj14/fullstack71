export default function StudentForm(){
    function handleSubmit(m){
        m.preventDefault();
        alert("Regitered Successfully!");
    }

    return<>
    <div>
         {/* Internal CSS */}
      <style>{`
      .form-container{
      width: 300px;
      background-color: white;
      padding: 20px;
      margin: 40px auto;
      border: 1px solid #0a0a0aff;
      border-radius: 8px;
      font-family: Arial;
      }

      .form-container h2{
      text-align: center;
      color: black;
      margin-bottom: 15px;
      }

      .form-container input{
      width: 90%;
      background-color: white;
      padding: 10px;
      margin: 8px 0;
      border: 1px solid #999;
      border-radius: 5px;
      }

      .btn-submit{
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      border: none;
      background: blue;
      color: white;
      border-radius; 5px;
      cursor: pointer;
      }
      `}</style>

      <form className = "form-container" onSubmit={handleSubmit}>
        <h2>Student Registration</h2>

        <input type = "text"
        name="name"
        placeholder="Student Name"
        style={{ fontSize: "14px"}}
        required /><br></br>

        <input type = "email"
        name="email"
        placeholder="Email"
        style={{ fontSize: "14px"}}
        required /><br></br>

        <input type="text"
        name="dept"
        placeholder="Department"
        style={{ fontSize: "14px"}}
        required /><br></br>

        <button tyoe="submit"
        className="btn-submit">
            Submit
        </button>

      </form>
    </div>
    </>
}
