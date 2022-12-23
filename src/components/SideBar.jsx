import '../index.css';
import { Button, Stack } from "@mui/material";
import { categories } from "../utils/constants";
// const selectedCategory='New';
const SideBar = ({selectedCategory, setselectedCategory}) => (
    <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    
    {
        categories.map((category) => (
            <Button className="category-btn"
            onClick={()=>{setselectedCategory(category.name)}}
            sx={{padding: {md:"0.3rem 0", xs:"0 4rem"}}}
            style={{background: category.name === selectedCategory && '#FC1503',color: 'white'}}
            key={category.name}>
                <span style={{color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon }</span>
                <span style={{opacity : category.name === selectedCategory ? '1' : '0.5'}}>{category.name}</span>
            </Button>
        ))
    }

 </Stack>
)

export default SideBar
