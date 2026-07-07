import React, { useState } from 'react';
import Sidebar from '../../componets/common/Sidebar';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/material";


import {
    Box,
    Typography,
    Button,
    TextField,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import Search from '../../componets/common/Search';


function ManageBook(props) {

    const [books, setBooks] = useState([
        {
            id: 1,
            title: "React Basics",
            author: "John Doe",
            category: "Programming",
            quantity: 10,
            status: "Available",
            image: "https://picsum.photos/100/150?1",
        },
        {
            id: 2,
            title: "Node.js Guide",
            author: "Mike Ross",
            category: "Programming",
            quantity: 5,
            status: "Available",

            image: "https://picsum.photos/100/150?1",
        },
    ]);
    const [isEditing, setIsEditing] = useState(false);

    const [open, setOpen] = useState(false);

    const [bookData, setBookData] = useState({
        title: "",
        author: "",
        category: "",
        quantity: "",
        image: "",
        status: "Available",
    });

    const handleChange = (e) => {
        setBookData({
            ...bookData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddBook = () => {
        if (isEditing) {
            setBooks(
                books.map((book) =>
                    book.id === bookData.id ? bookData : book
                )
            );
        } else {
            const newBook = {
                id: Date.now(),
                ...bookData,
            };

            setBooks([...books, newBook]);
        }

        setBookData({
            title: "",
            author: "",
            category: "",
            quantity: "",
            image: "",
            status: "Available",
        });

        setIsEditing(false);
        setOpen(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);

            setBookData({
                ...bookData,
                image: imageUrl,
            });
        }
    };
    const handleEdit = (book) => {
        setBookData(book);
        setIsEditing(true);
        setOpen(true);
    };

    const handleDelete = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };
    return (
        <>
            <Sidebar />


            <Box
                sx={{
                    ml: "210px",
                    p: 3,
                    width: "calc(100% - 210px)",
                    boxSizing: "border-box",
                }}

            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                    }}
                >
                    <Typography variant="h4" fontWeight="bold">
                        Manage Members
                    </Typography>

                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => {
                            setBookData({
                                title: "",
                                author: "",
                                category: "",
                                quantity: "",
                                image: "",
                                status: "Available",
                            });

                            setIsEditing(false);
                            setOpen(true);
                        }}
                    >
                        Add Book
                    </Button>
                </Box>

              <Search shadow={"Search Book.."}/>

                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Cover</TableCell>
                                <TableCell>Book Name</TableCell>
                                <TableCell>Author</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Actions</TableCell>

                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {books.map((book) => (
                                <TableRow key={book.id} hover>
                                    <TableCell>
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            width="70"
                                            height="80"
                                            style={{
                                                objectFit: "cover",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>{book.title}</TableCell>
                                    <TableCell>{book.author}</TableCell>
                                    <TableCell>{book.category}</TableCell>
                                    <TableCell>{book.quantity}</TableCell>
                                    <TableCell>{book.status}</TableCell>

                                    <TableCell>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            sx={{ mr: 1 }}
                                            onClick={() => handleEdit(book)}
                                        >
                                            Edit
                                        </Button>

                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleDelete(book.id)}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle>Add New Book</DialogTitle>

                    <DialogContent>
                        <TextField
                            fullWidth
                            label="Book Name"
                            name="title"
                            value={bookData.title}
                            onChange={handleChange}
                            margin="normal"
                        />

                        <TextField
                            fullWidth
                            label="Author"
                            name="author"
                            value={bookData.author}
                            onChange={handleChange}
                            margin="normal"
                        />

                        <TextField
                            fullWidth
                            label="Category"
                            name="category"
                            value={bookData.category}
                            onChange={handleChange}
                            margin="normal"
                        />

                        <TextField
                            fullWidth
                            label="Quantity"
                            name="quantity"
                            value={bookData.quantity}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <Button
                            variant="outlined"
                            component="label"
                        >
                            Upload Cover
                            <input
                                hidden
                                accept="image/*"
                                type="file"
                                onChange={handleImageChange}
                            />
                        </Button>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>
                            Cancel
                        </Button>

                        <Button
                            variant="contained"
                            onClick={handleAddBook}
                        >
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    );
}

export default ManageBook;
