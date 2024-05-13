import useCategories from '../hooks/useCategories'
import useProductQueryStore from '../store'
import '../styles/categoryList.css'


const CategoryList = () => {
  const  {data:categories}   = useCategories() 
  // if(error) return <h1 className='error-message'>{error.message}</h1>

  const selectedCategory = useProductQueryStore(s => s.productQuery.category)
  const setSelectedCategory = useProductQueryStore(s => s.setCategory)


  return (

    <div className="btn-group category-group d-flex justify-content-center gap-2" role="group" aria-label="Basic radio toggle button group">

      {categories?.map((category) => <button className={`btn btn-primary ${selectedCategory === category ? ' text-black' : ''}`} key={category} onClick={() => setSelectedCategory(category)}>{category}</button>




      )}
    </div>

  )


}

export default CategoryList
