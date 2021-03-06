import { withFfcConsumer } from 'ffc-react-client-sdk';

function Square(props) {
    const { flags, ffcClient } = props;
    
    return (
      <button style={{backgroundColor: props.backgroundColor}} className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  export default withFfcConsumer()(Square);