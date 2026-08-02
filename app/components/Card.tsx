type Props = {
    title:string
    description:string
}

const Card = (props: Props) => {
  return (

    <div className="flex flex-col justify-center items-center 
    border-2 px-10 py-10 w-[500px] mx-auto my-5 rounded-md 
    shadow-lg">
        <p>{props.title}</p>
        <p>{props.description}</p>
    </div>
  )
};

export default Card;