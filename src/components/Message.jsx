

const Message = ({ setStep }) => {
  return (
    <div className="message">
      <h2>My Dearest</h2>
      <p>
       Bungurrrrr,vaisiii, dalluuu, 
       lagirako thyoo hola nii rose day ma keii paiey na vanera ,
       yei hoo aaba garney vaneko abaa feri aru day ko lagi hudaina. 
       starting matra vaera halka keii garauney socheera hoo feri.. bujoo 
       
      </p>
      <button onClick={() => setStep(2)}>Roses for Bungurr</button>
    </div>
  );
}

export default Message;
