import {ConnectionOptions, connection,connect} from 'mongoose';

const opts : ConnectionOptions = {
  useNewUrlParser: true,
  useFindAndModify:true,
  useUnifiedTopology:true
}

export default
connect("mongodb+srv://axeldev:Axel2064@cellphonestore-ozbtb.mongodb.net/<dbname>?retryWrites=true&w=majority", opts);

const Connection = connection;

Connection.on('open', () => {
    console.log('mongodb funcionando....')
})

Connection.once('err', (err)=> console.log(err));