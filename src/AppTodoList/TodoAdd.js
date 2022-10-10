import { useForm } from "../hook/useForm"

export const TodoAdd = () => {

  const {description, onInputChange, onResetForm} = useForm({
    description: ''


  })

  return (
    <form>
        <input 
        type= "text" 
        placeholder="¿Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange = {onInputChange}
        />
        <button className='btn btn-primary mt-3'>Agregar</button>
    </form>
  )
}
