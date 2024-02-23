const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <img
          className="h-full w-full object-cover rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dGrx_W5jmTLaXAwTJZAKM-9wrQYvirFhJAZNQr9N7i7uGDNumqPsnkmBgsKCB7J8Pb4&usqp=CAU"
        />
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-xs m-2 p-2 text-black">
          Herramientas
        </span>
        <div className="absolute top-0 right-0 flex items-center bg-white h-6 w-6 rounded-full m-2 p-1">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">Gato hidraulico</span>
        <span className="text-lg font-medium">$500</span>
      </p>
    </div>
  );
};

export default Card;
