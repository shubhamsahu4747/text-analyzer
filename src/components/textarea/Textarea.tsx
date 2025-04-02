import React ,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textarea(props: any)  {
	const { showAlert } = props;
	const [text, setText] = useState('')

	

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	const TextUpperCase = () => {
		setText(text.toUpperCase())
		if(!text){
			showAlert('Text is required to convert to uppercase.', 'red', true);
            return;
		}
		showAlert('Text converted to uppercase.', 'green' ,true);
	}
	const textToSpeak = () => {
        const utterance = new SpeechSynthesisUtterance(text);
		if (!text) {
			showAlert('Text is required to convert to uppercase.', 'red', true);
			return;
		}
        window.speechSynthesis.speak(utterance);
    }
	const textToSpeakDownload = () => {
		if (!text) {
            showAlert('Text is required to save as a file.', 'red', true);
            return;
        }
		const blob = new Blob([text], {type: 'text/plain'});
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.download = 'text.txt';
		a.href = url;
		document.body.appendChild(a);
		a.click();
		window.URL.revokeObjectURL(url);
		document.body.removeChild(a);
		showAlert('Text file hase been saved.', 'green', true);

	}
	
	const clearText = (text: string) => {
		if (!text) {
			showAlert('Text is required to convert to uppercase.', 'red', true);
			return;
		}
		setText('')
		showAlert('Text Cleard.', 'green', true);
	}	
	
	const stopTexttoSpeak = (text:string) => {
		if (!text) {
            showAlert('Text is required to stop speaking.', 'red', true);
            return;
        }
		window.speechSynthesis.cancel();
	}

	const textCopy = (text: string) => {
		if (!text) {
            showAlert('Text is required to copy.', 'red', true);
            return;
        }
		navigator.clipboard.writeText(text);
        showAlert('Text Copied.', 'green', true);
	}

	const Textlowercase =(text: string) => {
		if (!text) {
            showAlert('Text is required to convert to lowercase.', 'red', true);
            return;
        }
		setText(text.toLowerCase())
		showAlert('Text converted to lowercase.', 'green', true);
	}

	

	
  return (
	<>
	  <div className='p-10 w-full py-3 mt-10'>

	  {/* <h2 className='text-2xl text-gray-100 mb-5'>{props.heading}</h2> */}
	  <div className="flex flex-row gap-3">
		<p className='text-sm text-gray-100 mb-2.5'>{text.length} Characters</p>
		<p className='text-sm text-gray-100 mb-2.5'>Number of Vowels: {text.match(/[aeiou]/gi)?.length}</p>
		<p className='text-sm text-gray-100 mb-2.5'>Number of Words: {text.split(' ').length}</p>
				  <p className='text-sm text-gray-100 mb-2.5'>Reading Time: {0.008 / text.split(' ').length	 	}  </p>
	  </div>
	  
	 <textarea {...props} value={text} onChange={handleChange} className='border-1 border-gray-300 rounded-md w-full py-2 px-3 text-gray-100 focus:outline-none resize-none focus:border-blue-500' rows={5} />
	  
	  <button type='button' className='btn bg-blue-800 rounded-sm p-1 cursor-pointer' onClick={TextUpperCase}>Convert to Uppercase</button>
	  <button type='button' className='btn bg-blue-800 rounded-sm p-1 cursor-pointer ml-1.5' onClick={() =>Textlowercase(text)}>Convert to Lowercase</button>
	  <button type='button' className='btn bg-blue-800 rounded-sm p-1 cursor-pointer ml-1.5' onClick={textToSpeak}>Text Speak</button>
	  <button type='button' className='btn bg-blue-800 rounded-sm p-1 cursor-pointer ml-1.5' onClick={textToSpeakDownload}>Download Converted Text</button>
	  <button type='button' className='btn bg-blue-800 rounded-sm p-1 cursor-pointer ml-1.5' onClick={() => clearText(text)}>Clear Text</button>
	  <button type='button' className='btn bg-blue-800 rounded-sm p-1 cursor-pointer ml-1.5' onClick={() => stopTexttoSpeak(text)}>Stop Audio</button>
	  <button type='button' className='btn bg-blue-800 rounded-sm p-1 cursor-pointer ml-1.5' onClick={() => textCopy(text)}>Copy Text</button>
	  
		
	  
	  <div className="w-full rounded-sm py-3 mt-5">
	     <h2 className='text-2xl text-gray-100 mb-5'>Prieview</h2>
		<div className='flex flex-row gap-5'>
                <p className=' rounded-md w-full '>{text ||"Enter text above to see the magic"}</p>
		</div>	
	  </div>
		  </div>
	</>
  )
}

Textarea.defaultProps = {
	heading: 'Enter your Heading Here...',
}
Textarea.propTypes = {
  heading: PropTypes.string.isRequired,
}


