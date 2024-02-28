
import { Delete } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';
const DeleteButton = ({ productId}) => {
    const navigate = useNavigate();
    const handleDelete = async () => {
        try {
            // Thực hiện gọi API để xóa sản phẩm với productId
            await fetch(`http://localhost:8080/product/delete/${productId}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                // Các headers khác nếu cần
              },
            });
      
            // Gọi hàm onDelete để thông báo việc xóa sản phẩm
            // onDelete(productId);
            navigate('/');
          } catch (error) {
            console.error('Error deleting product:', error);
          }
    };
  
    return (
      <Delete onClick={handleDelete}/>
    );
  };
  
  export default DeleteButton;