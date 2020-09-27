const express = require('express');
app.use(express.json());
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`App lintening on port ${PORT}`));