import { useState, useTransition } from "react"


function Contact() {
  const [pending, startTransition]=useTransition()
  const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    startTransition(async ()=>{
      await new Promise(res=>setTimeout(res,2000))
    })
    
    
    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields.");
      return;
    }
    if (!isValidEmail(form.email)) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setSuccess(true);
  
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 4000);
    startTransition(false)
  };

  return (
    <div className="bg-gradient-to-br from-indigo-400 to-white dark:from-gray-400 dark:to-gray-800 h-screen flex justify-center items-center shadow-md p-4 ">
      <section id="contact" className="bg-white dark:bg-gray-700 shadow-md rounded-lg w-80 h-100 flex flex-col items-center ">
        <h2 className="text-4xl font-extrabold  ">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div >
            <label className="block text-lg">Name</label>
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})}
              className="w-65 h-9 border rounded px-8 py-2"  />
          </div>
          <div>
            <label className="block text-lg">Email</label>
            <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})}
              className="w-65 h-9 border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-lg">Message</label>
            <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})}
              className="w-65 h-25 border rounded px-3 py-2" rows="5" />
          </div>

          {error && <div className="text-red-600">{error}</div>}
          {success && <div className="text-green-600">Message sent successfully</div>}

          <button disabled={pending} type="submit" className=" w-65 px-6 py-2 rounded bg-blue-500 text-white">{pending?"Sending.....":"Send"}</button>
        </form>
        <br />
      
      </section>
       
      
    </div>
    
  )
}

export default Contact