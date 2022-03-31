import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
};
const Index = () => {
  const [name, setName] = useState('');
  const [state, setState] = useReducer(reducer, defaultState);
  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      const newItem = { id: name.length + Math.random() * 50, name };
      setState({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      setState({ type: 'NO_VALUE' });
    }
  };
  function closeModal() {
    setState({ type: 'CLOSE_MODAL' });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                setState({ type: 'REMOVE_ITEM', payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
