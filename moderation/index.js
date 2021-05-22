const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app.post('/events', async (req, res) => {

  const {type, data} = req.body;

  if(type === 'CommentCreated'){
    const status = data.content.include('orange') ? 'reject' : 'approved';

    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
      }
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log('moderation running at 4003');
});