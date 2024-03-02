import {useState} from 'react';
import QRCode from 'qrcode'
;


function App() {

  const[url,setUrl]=useState("")
  const[qrcode,setQrcode]=useState("")

  const generateQrCode = ()=>{
    QRCode.toDataURL(url,{
      width:800,
      margin:2



    },(err,url)=>{
      if(err){
        return console.error(err)
      }
      console.log(url)
      setQrcode(url)
    })
  }

  return (
    
      <div className='app'>
        <h1>Qr code  </h1>
        <input
              type="text"
              placeholder="e.g. https://google.com"
              value={url}
              onChange={(evt) => setUrl(evt.target.value)}/>
        <button onClick={() => generateQrCode()}>Generate</button>
        {qrcode &&<>
        <img src={qrcode} alt="" />
        <a href={qrcode} download="qrcode.png">download</a>
        
        </>}
       </div>
  )
}

export default App
