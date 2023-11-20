import React, { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MainApp } from './App.styled';
import Loader from './Loader';
import axios from 'axios';

class App extends Component {
  state = {
    images: [],
    error: '',
    page: 1,
    imgSearch: '',
    isLoading: false,
  };

  searchFormSubmit = imgSearch => {
    this.setState({
      imgSearch,
      images: [],
      page: 1,
      error: '',
    });
  };
  
  async componentDidUpdate(_, prevState) {
    if (
      prevState.imgSearch !== this.state.imgSearch ||
      prevState.page !== this.state.page
    ) {
    if (response.totalHits === 0) {
          return toast.error('Sorry, didn`t find, try again');
        }
    if (response.data.hits.length) {
          return this.setState(prevState => ({
            images: [...prevState.images, ...response.data.hits],
          }));
        } else {
          return toast.error('Sorry, there are no images .');
        }
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  
  loadMore = event => {
    event.preventDefault();
    this.setState(pr => ({
      page: pr.page + 1,
    }));
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onSearch={this.searchFormSubmit} />
        <MainApp>
          {isLoading && <Loader />}
          {error && <p>{error}</p>}
          {images.length !== 0 && (
            <ImageGallery images={images} onLoadMore={this.loadMore} />
          )}
          <ToastContainer autoClose={3000} />
        </MainApp>
      </>
    );
  }
}
export default App;
