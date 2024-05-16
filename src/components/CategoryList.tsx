import useCategories from '../hooks/useCategories'
import useProductQueryStore from '../store'
import '../styles/categoryList.css'


const CategoryList = () => {
  const  {data:categories}   = useCategories() 
  // if(error) return <h1 className='error-message'>{error.message}</h1>

  const selectedCategory = useProductQueryStore(s => s.productQuery.category)
  const setSelectedCategory = useProductQueryStore(s => s.setCategory)


  return (

    <div className=" ps-5 d-flex justify-content-start flex-wrap gap-2" >

      {categories?.map((category) => <button className={`btn btn-first ${selectedCategory === category ? ' text-black' : 'text-white'}`} key={category} onClick={() => setSelectedCategory(category)}>{category}</button>




      )}
    </div>

  )


}

export default CategoryList
