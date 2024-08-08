import React, { useState } from 'react';

const TableSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Amanda Walter Shirt Men', price: '$33', category: 'Fashion' },
    { id: 2, name: 'Abercrombie Allen Brook Shirt', price: '$70', category: 'Fashion' },
    { id: 3, name: 'Abercrombie Lake Arnold Shirt', price: '$60', category: 'Fashion' },
    { id: 4, name: 'Bench Shirt', price: '$29', category: 'Fashion' },
  ]);
  const [newProduct, setNewProduct] = useState({ id: null, name: '', price: '', category: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    if (newProduct.name && newProduct.price && newProduct.category) {
      if (isEditing) {
        setData(data.map(item => (item.id === newProduct.id ? newProduct : item)));
        setIsEditing(false);
      } else {
        setData([...data, { id: data.length + 1, ...newProduct }]);
      }
      setNewProduct({ id: null, name: '', price: '', category: '' });
      setIsModalOpen(false); // Close the modal after adding/updating the product
    }
  };

  const handleEdit = (product) => {
    setNewProduct(product);
    setIsEditing(true);
    setIsModalOpen(true); // Open the modal for editing
  };

  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setNewProduct({ id: null, name: '', price: '', category: '' }); // Reset the form
    setIsEditing(false); // Reset editing state
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      <div className="header">
        <h2>Search products: shirt</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="create-product" onClick={toggleModal}>
          + Create Product
        </button>
      </div>
      
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{isEditing ? 'Edit Product' : 'Create New Product'}</h3>
            <form className="product-form" onSubmit={handleAddProduct}>
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={newProduct.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={newProduct.category}
                onChange={handleChange}
                required
              />
              <button type="submit" className="create-product">
                {isEditing ? 'Update Product' : 'Add Product'}
              </button>
              <button type="button" className="cancel-button" onClick={toggleModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button className="btn read">Read</button>
                <button className="btn edit" onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn delete" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSearch;
