import Button from "./Button";
import Input from "./Input";

import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseIsbn, chooseAuthorName, chooseTitle, chooseBookLength, chooseYearOfRelease, chooseInStock } from "../redux/slices/RootSlice";

interface BookFormProps {
  id?: string[]
}

const BookForm = (props: BookFormProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = async (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    if (props.id && props.id.length > 0) {
      await server_calls.update(props.id[0], data);
      console.log(`Updated: ${data.title} ${data.author_name} ${props.id}`);
      setTimeout(() => { window.location.reload() }, 500);
    } else {
      dispatch(chooseIsbn(data.isbn));
      dispatch(chooseTitle(data.title));
      dispatch(chooseAuthorName(data.author_name));
      dispatch(chooseBookLength(data.book_length));
      dispatch(chooseYearOfRelease(data.year_of_release));
      dispatch(chooseInStock(data.in_stock));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 500)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="title">ISBN</label>
          <Input {...register('isbn')} name='isbn' placeholder="ISBN" />
        </div>
        <div>
          <label htmlFor="author_name">Author Name</label>
          <Input {...register('author_name')} name='author_name' placeholder="Author Name" />
        </div>
        <div>
          <label htmlFor="book_length">Book Length</label>
          <Input {...register('book_length')} name='book_length' placeholder="Book Length" />
        </div>
        <div>
          <label htmlFor="year_of_release">Year of Release</label>
          <Input {...register('year_of_release')} name='year_of_release' placeholder="Year of Release" />
        </div>
        <div>
          <label htmlFor="in_stock">In Stock</label>
          <Input {...register('in_stock')} name='in_stock' placeholder="In Stock" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm;
