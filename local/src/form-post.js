import React from 'react'

export default function FromPost(){
    let[postedData] = React.useState('')
    const form= React.useRef()

    const onSubmitForm = (event)=>{
        event.preventDefault()
        const formData = new FormData(form.current)
        const formEnt = Object.fromEntries(formData.entries())
        fetch(/api/form-post ,{
            method:'POST',
            body:JSON.stringify(formEnt),
            header:{'Content-Type':'application/json'}
        })
        .then(response => response.text())
        .then(result => setPostedData(result))
        .catch(err => alert(err))
    }

    const inputStyle={
        margin:'5px 0',
    }
    return(
        <div style = {{margin:'30px'}}>
            <form ref = {form} onSubmit={}></form>
            <div>ติดต่อเรา</div>
            <input type="text" name="name" size="43" placeholder="ชื่อ" style={}/><br/>
            <input type="email" name="email" size="43" placeholder="อีเมล" style={}/><br/>
            <input type="message" cols="40" rows="4" placeholder="ข้อความ" style={}/><br/>
        </div>
    )
}