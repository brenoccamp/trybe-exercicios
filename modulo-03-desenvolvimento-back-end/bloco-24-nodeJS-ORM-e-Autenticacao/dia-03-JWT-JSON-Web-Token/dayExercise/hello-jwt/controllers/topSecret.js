module.exports = (_req, res, _next) => 
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Aranha' });