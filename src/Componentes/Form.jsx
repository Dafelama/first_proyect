export default function Form() {
    return (
        <form className='LibraryForm'>
            <label>
                Nombre
                <input type='text' />
            </label>
            <label>
                Año
                <input type='number' />
            </label>
            <label>
                <button type='submit'>Buscar</button>
            </label>
        </form>
    )
}