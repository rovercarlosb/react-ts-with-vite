import useNewSubForm from '../hooks/useNewSubForm';
import { Sub } from '../types';

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  // const [inputValues, setInputValues] =
  //   useState<FormState['inputValues']>(INITIAL_STATE);

  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    dispatch({
      type: 'change_value',
      payload: {
        inputName: e.target.name,
        inputValue: e.target.value,
      },
    });
  };

  const handleClear = () => {
    dispatch({
      type: 'clear',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />

        <button type="submit">Save New Sub</button>
        <button type="button" onClick={handleClear}>
          Clear new Sub
        </button>
      </form>
    </div>
  );
};

export default Form;
