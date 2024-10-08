import { CONTACTS } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-black pb-4">
      <h2 className="my-10 text-4xl text-center bg-gradient-to-r from-cyan-300 via-slate-300 to-cyan-600 bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <div className="text-center tracking-tighter">
        <p className="my-4"> {CONTACTS.address} </p>
        <p className="my-4"> {CONTACTS.number} </p>
        <a href="#" className="border-b">{CONTACTS.email}</a>
        
      </div>
    </div>
  )
}

export default Contact