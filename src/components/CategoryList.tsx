import useCategories from '../hooks/useCategories'
import '../styles/categoryList.css'
interface Props {
  onSelectCategory : (category:string) => void
  selectedCategory:string | null
}

const CategoryList = ({selectedCategory ,onSelectCategory}:Props) => {
  const { categories, error } = useCategories()
  return (
    
    <div className="btn-group category-group d-flex justify-content-center gap-2" role="group" aria-label="Basic radio toggle button group">
  
      {error && <h1>{error}</h1>}
      { categories.map((category) =>

        
    <button className= {`btn btn-primary ${selectedCategory === category ? ' text-black':''}`} key={category} onClick={() => onSelectCategory(category)}>{category}</button>
    
        
    

      )}
<button className={`btn btn-primary all ${selectedCategory === 'all' ? 'text-black':''}`} onClick={() => onSelectCategory('all')}>All</button>
      </div>
    
      )


      }

      export default CategoryList
