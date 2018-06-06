const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const bc1 = {
  "chain": [
    {
      "index": 1,
      "timestamp": 1528268015882,
      "transaction": [],
      "nonce": 100,
      "hash": "0",
      "previousBlockHash": "0"
    },
    {
      "index": 2,
      "timestamp": 1528268023546,
      "transaction": [],
      "nonce": 16441,
      "hash": "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285",
      "previousBlockHash": "0"
    },
    {
      "index": 3,
      "timestamp": 1528268027533,
      "transaction": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "55962f90695611e88791d1f9d9486f68",
          "transactionId": "5aca9550695611e88791d1f9d9486f68"
        }
      ],
      "nonce": 33118,
      "hash": "0000d82d803195dace164b2df442249dbfd849571a8e1d6a3e272bc09ca303d7",
      "previousBlockHash": "00009b2ef664890dbcd795344f8145bac1710db47cea457183f41c9ca24c3285"
    },
    {
      "index": 4,
      "timestamp": 1528268030474,
      "transaction": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "55962f90695611e88791d1f9d9486f68",
          "transactionId": "5c890e30695611e88791d1f9d9486f68"
        }
      ],
      "nonce": 84680,
      "hash": "0000da2b3636c421f7eba5c81a095fba84af36ffe5db8a1bb2e197154ebadeff",
      "previousBlockHash": "0000d82d803195dace164b2df442249dbfd849571a8e1d6a3e272bc09ca303d7"
    },
    {
      "index": 5,
      "timestamp": 1528268032515,
      "transaction": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "55962f90695611e88791d1f9d9486f68",
          "transactionId": "5e49d100695611e88791d1f9d9486f68"
        }
      ],
      "nonce": 49904,
      "hash": "00008584007aca7ef3ae587aed0233406664724c24beae7faf1e4c9721e5dcc9",
      "previousBlockHash": "0000da2b3636c421f7eba5c81a095fba84af36ffe5db8a1bb2e197154ebadeff"
    },
    {
      "index": 6,
      "timestamp": 1528268036047,
      "transaction": [
        {
          "amount": 12.5,
          "sender": "00",
          "recipient": "55962f90695611e88791d1f9d9486f68",
          "transactionId": "5f80f170695611e88791d1f9d9486f68"
        }
      ],
      "nonce": 108081,
      "hash": "00004e59d4eb0cc33164aea6ed81a1d2e37db7037a18ce5abe8e8a89d1c9f887",
      "previousBlockHash": "00008584007aca7ef3ae587aed0233406664724c24beae7faf1e4c9721e5dcc9"
    }
  ],
  "pendingTransactions": [
    {
      "amount": 12.5,
      "sender": "00",
      "recipient": "55962f90695611e88791d1f9d9486f68",
      "transactionId": "619d41c0695611e88791d1f9d9486f68"
    }
  ],
  "currentNodeUrl": "http://localhost:3001",
  "networkNodes": []
};
console.log('Valid : ',bitcoin.chainIsValid(bc1.chain))
