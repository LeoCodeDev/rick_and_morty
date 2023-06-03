export default function Card(props) {
   const {id,
         name,
         status,
         species,
         gender,
         planet,
         image,
         onClose } = props
   return (
      <div key={id}>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{planet}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
   