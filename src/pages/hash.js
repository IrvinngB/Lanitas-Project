import bcrypt from 'bcryptjs';

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Ejemplo de uso
(async () => {
  const hashedPassword = await hashPassword('LanitasRYTDD2024*');
  console.log('Contraseña hasheada:', hashedPassword);
})();
