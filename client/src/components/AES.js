// // Reversing the string
// function reverse(s) {
//   return s.split("").reverse().join("");
// }

// To convert string to bits
function stringToBits(input) {
  let bits = "";
  for (let i = 0; i < input.length; i++) {
    let temp = "";
    let c = input.charCodeAt(i);
    for (let j = 7; j >= 0; j--) {
      temp += String(c & (1 << j) ? "1" : "0");
    }
    bits += temp;
  }
  return bits;
}

// To convert bits to string
function bitsToString(bits) {
  let result = "";
  for (let i = 0; i < bits.length; i += 8) {
    let c = 0;
    for (let j = i; j < i + 8; j++) {
      c = (c << 1) | (bits[j] === "1" ? 1 : 0);
    }
    result += String.fromCharCode(c);
  }
  return result;
}

// // To convert from bits to hex
// function bitsToHex(bits) {
//     const lookupTable = "0123456789ABCDEF";
//     let hexString = "";
//     for (let i = 0; i < bits.length; i += 4) {
//       let byte = bits.slice(i, i + 4);
//       let hexValue = lookupTable[parseInt(byte, 2)];
//       hexString += hexValue;
//     }
//     return hexString;
// }

// XOR function
function exor(input1, input2) {
  let output = "";
  for (let i = 0; i < input1.length; i++) {
    output += (input1[i] === input2[i] ? "0" : "1");
  }
  return output;
}

// Circular Left Shift function implementation
function leftShift(input) {
  return input.slice(1) + input[0];
}

// S-Box Table
let sbox = [
        ["01100011", "01111100", "01110111", "01111011", "11110010", "01101011", "01101111", "11000101", "00110000", "00000001", "01100111", "00101011", "11111110", "11010111", "10101011", "01110110"],
        ["11001010", "10000010", "11001001", "01111101", "11111010", "01011001", "01000111", "11110000", "10101101", "11010100", "10100010", "10101111", "10011100", "10100100", "01110010", "11000000"],
        ["10110111", "11111101", "10010011", "00100110", "00110110", "00111111", "11110111", "11001100", "00110100", "10100101", "11100101", "11110001", "01110001", "11011000", "00110001", "00010101"],
        ["00000100", "11000111", "00100011", "11000011", "00011000", "10010110", "00000101", "10011010", "00000111", "00010010", "10000000", "11100010", "11101011", "00100111", "10110010", "01110101"],
        ["00001001", "10000011", "00101100", "00011010", "00011011", "01101110", "01011010", "10100000", "01010010", "00111011", "11010110", "10110011", "00101001", "11100011", "00101111", "10000100"],
        ["01010011", "11010001", "00000000", "11101101", "00100000", "11111100", "10110001", "01011011", "01101010", "11001011", "10111110", "00111001", "01001010", "01001100", "01011000", "11001111"],
        ["11010000", "11101111", "10101010", "11111011", "01000011", "01001101", "00110011", "10000101", "01000101", "11111001", "00000010", "01111111", "01010000", "00111100", "10011111", "10101000"],
        ["01010001", "10100011", "01000000", "10001111", "10010010", "10011101", "00111000", "11110101", "10111100", "10110110", "11011010", "00100001", "00010000", "11111111", "11110011", "11010010"],
        ["11001101", "00001100", "00010011", "11101100", "01011111", "10010111", "01000100", "00010111", "11000100", "10100111", "01111110", "00111101", "01100100", "01011101", "00011001", "01110011"],
        ["01100000", "10000001", "01001111", "11011100", "00100010", "00101010", "10010000", "10001000", "01000110", "11101110", "10111000", "00010100", "11011110", "01011110", "00001011", "11011011"],
        ["11100000", "00110010", "00111010", "00001010", "01001001", "00000110", "00100100", "01011100", "11000010", "11010011", "10101100", "01100010", "10010001", "10010101", "11100100", "01111001"],
        ["11100111", "11001000", "00110111", "01101101", "10001101", "11010101", "01001110", "10101001", "01101100", "01010110", "11110100", "11101010", "01100101", "01111010", "10101110", "00001000"],
        ["10111010", "01111000", "00100101", "00101110", "00011100", "10100110", "10110100", "11000110", "11101000", "11011101", "01110100", "00011111", "01001011", "10111101", "10001011", "10001010"],
        ["01110000", "00111110", "10110101", "01100110", "01001000", "00000011", "11110110", "00001110", "01100001", "00110101", "01010111", "10111001", "10000110", "11000001", "00011101", "10011110"],
        ["11100001", "11111000", "10011000", "00010001", "01101001", "11011001", "10001110", "10010100", "10011011", "00011110", "10000111", "11101001", "11001110", "01010101", "00101000", "11011111"],
        ["10001100", "10100001", "10001001", "00001101", "10111111", "11100110", "01000010", "01101000", "01000001", "10011001", "00101101", "00001111", "10110000", "01010100", "10111011", "00010110"]
    ];

// Inverse S-Box Table
let isbox = [
        ["01010010", "00001001", "01101010", "11010101", "00110000", "00110110", "10100101", "00111000", "10111111", "01000000", "10100011", "10011110", "10000001", "11110011", "11010111", "11111011"],
        ["01111100", "11100011", "00111001", "10000010", "10011011", "00101111", "11111111", "10000111", "00110100", "10001110", "01000011", "01000100", "11000100", "11011110", "11101001", "11001011"],
        ["01010100", "01111011", "10010100", "00110010", "10100110", "11000010", "00100011", "00111101", "11101110", "01001100", "10010101", "00001011", "01000010", "11111010", "11000011", "01001110"],
        ["00001000", "00101110", "10100001", "01100110", "00101000", "11011001", "00100100", "10110010", "01110110", "01011011", "10100010", "01001001", "01101101", "10001011", "11010001", "00100101"],
        ["01110010", "11111000", "11110110", "01100100", "10000110", "01101000", "10011000", "00010110", "11010100", "10100100", "01011100", "11001100", "01011101", "01100101", "10110110", "10010010"],
        ["01101100", "01110000", "01001000", "01010000", "11111101", "11101101", "10111001", "11011010", "01011110", "00010101", "01000110", "01010111", "10100111", "10001101", "10011101", "10000100"],
        ["10010000", "11011000", "10101011", "00000000", "10001100", "10111100", "11010011", "00001010", "11110111", "11100100", "01011000", "00000101", "10111000", "10110011", "01000101", "00000110"],
        ["11010000", "00101100", "00011110", "10001111", "11001010", "00111111", "00001111", "00000010", "11000001", "10101111", "10111101", "00000011", "00000001", "00010011", "10001010", "01101011"],
        ["00111010", "10010001", "00010001", "01000001", "01001111", "01100111", "11011100", "11101010", "10010111", "11110010", "11001111", "11001110", "11110000", "10110100", "11100110", "01110011"],
        ["10010110", "10101100", "01110100", "00100010", "11100111", "10101101", "00110101", "10000101", "11100010", "11111001", "00110111", "11101000", "00011100", "01110101", "11011111", "01101110"],
        ["01000111", "11110001", "00011010", "01110001", "00011101", "00101001", "11000101", "10001001", "01101111", "10110111", "01100010", "00001110", "10101010", "00011000", "10111110", "00011011"],
        ["11111100", "01010110", "00111110", "01001011", "11000110", "11010010", "01111001", "00100000", "10011010", "11011011", "11000000", "11111110", "01111000", "11001101", "01011010", "11110100"],
        ["00011111", "11011101", "10101000", "00110011", "10001000", "00000111", "11000111", "00110001", "10110001", "00010010", "00010000", "01011001", "00100111", "10000000", "11101100", "01011111"],
        ["01100000", "01010001", "01111111", "10101001", "00011001", "10110101", "01001010", "00001101", "00101101", "11100101", "01111010", "10011111", "10010011", "11001001", "10011100", "11101111"],
        ["10100000", "11100000", "00111011", "01001101", "10101110", "00101010", "11110101", "10110000", "11001000", "11101011", "10111011", "00111100", "10000011", "01010011", "10011001", "01100001"],
        ["00010111", "00101011", "00000100", "01111110", "10111010", "01110111", "11010110", "00100110", "11100001", "01101001", "00010100", "01100011", "01010101", "00100001", "00001100", "01111101"]
    ];

// Round constant array
let roundConstant = [
        "00000001000000000000000000000000",
        "00000010000000000000000000000000",
        "00000100000000000000000000000000",
        "00001000000000000000000000000000",
        "00010000000000000000000000000000",
        "00100000000000000000000000000000",
        "01000000000000000000000000000000",
        "10000000000000000000000000000000",
        "00011011000000000000000000000000",
        "00110110000000000000000000000000"
    ];

// Key adjustment function
function keyExp(key) {
    let output = '';
    let zpad = 0;
    const n = key.length;
    if (n % 128) {
        zpad = 128 - (n % 128);
    }
    while (zpad--) {
        output += '0';
    }

    for (let i = 0; i < n; i++) {
        output += key[i];
    }

    const sz = Math.ceil(key.length / 128.0);
    const key128 = new Array(sz);
    
    if (n > 128) {
        for (let i = 0; i < n; i += 128) {
            let temp = '';
            for (let j = i; j < i + 128; j++) {
                temp += output[j];
            }
            key128[i / 128] = temp;
        }
        output = key128[0];
        for (let i = 1; i < sz; i++) {
            output = exor(output, key128[i]);
        }
    }

    return output;
}

// Key generation function
function keyGen(key, round) {
    for (let r = 0; r < round; r++) {
        let words = ["", "", "", ""];

        for (let i = 0; i < 128; i += 32) {
            for (let j = i; j < i + 32; j++) {
                words[Math.floor(j / 32)] += key[j];
            }
        }

        let temp = words[3];

        for (let i = 0; i < 8; i++) {
            const temp2 = leftShift(temp);
            temp = temp2;
        }

        let temp2 = "";
        for (let i = 0; i < 32; i += 8) {
            let row = 0;
            let col = 0;
            for (let j = 0; j < 8; j++) {
                if (j >= 4) {
                    col *= 2;
                    col += (temp[i + j] === "1" ? 1 : 0);
                } else {
                    row *= 2;
                    row += (temp[i + j] === "1" ? 1 : 0);
                }
            }
            let sub = sbox[row][col];
            temp2 += sub;

            if (i === 0) {
                temp2 = exor(temp2, roundConstant[r]);
            }
        }
        temp = temp2;

        let key2 = "";
        for (const word of words) {
            temp = exor(temp, word);
            key2 += temp;
        }
        key = key2;
    }
    return key;
}

// Substitution of Bytes
function subbyte(input) {
    let output = "";
    for (let i = 0; i < input.length; i += 8) {
        let row = 0, col = 0;
        for (let j = 0; j < 8; j++) {
            if (j >= 4) {
                col *= 2;
                col += (input[i + j] === "1" ? 1 : 0);
              } else {
                row *= 2;
                row += (input[i + j] === "1" ? 1 : 0);
              }
            }
            
            const sub = sbox[row][col];
            output += sub;
          }
    return output;
  }

  // Inverse Substitution of Bytes
  function isubbyte(input) {
    let output = "";
    for (let i = 0; i < input.length; i += 8) {
        let row = 0, col = 0;
        for (let j = 0; j < 8; j++) {
            if (j >= 4) {
                col *= 2;
                col += (input[i + j] === "1" ? 1 : 0);
              } else {
                row *= 2;
                row += (input[i + j] === "1" ? 1 : 0);
              }
            }

        const isub = isbox[row][col];
        output += isub;
    }
    return output;
}

// Shifting of Rows
function shiftRows(input) {
    let output = "";
    for (let i = 0; i < 16; i++) {
        const factor = ((i * 5) % 16) * 8;

        for (let j = factor; j < factor + 8; j++) {
            output += input[j];
        }
    }
    return output;
}

// Inverse Shifting of Rows
function ishiftRows(input) {
    let output = "";
    for (let i = 0; i < 16; i++) {
        const factor = ((i * 13) % 16) * 8;

        for (let j = factor; j < factor + 8; j++) {
            output += input[j];
        }
    }
    return output;
}

// Galois Multiplication
function galois(input, mult) {
    if (mult === 1) return input;
    let output = "";
    for (let i = 1; i < input.length; i++) {
        output += input[i];
    }
    output += '0';

    if (input[0] !== '0') {
        output = exor(output, "00011011");
    }

    if (mult === 3) {
        output = exor(input, output);
    }
    return output;
}

// Galois Multiplication for Inverse Mix Column
function igalois(input, mult) {
    let output = "";
    if (mult === 9) {
        output = exor(galois(galois(galois(input, 2), 2), 2), input);
    } else if (mult === 11) {
        output = exor(galois(exor(galois(galois(input, 2), 2), input), 2), input);
    } else if (mult === 13) {
        output = exor(galois(galois(exor(galois(input, 2), input), 2), 2), input);
    } else {
        output = galois(exor(galois(exor(galois(input, 2), input), 2), input), 2);
    }
    return output;
}

// Mixing of Columns
function mixColumns(input) {
  let result = "";

  let words = ["", "", "", ""];

  for (let i = 0; i < 128; i+=32) {
    for (let j = i; j < i+32; j++) {
        words[Math.floor(j/32)] += input[j];
    }
  }

  for (let i = 0; i < 4; i++) {
    let bytes = ["", "", "", ""];
    for (let j = 0; j < 32; j += 8) {
      for (let k = j; k < j + 8; k++) {
        bytes[Math.floor(k / 8)] += words[i][k];
      }
    }
    let r1 = exor(
      exor(exor(galois(bytes[0], 2), galois(bytes[1], 3)), bytes[2]),
      bytes[3]
    );
    let r2 = exor(
      exor(exor(galois(bytes[1], 2), galois(bytes[2], 3)), bytes[0]),
      bytes[3]
    );
    let r3 = exor(
      exor(exor(galois(bytes[2], 2), galois(bytes[3], 3)), bytes[0]),
      bytes[1]
    );
    let r4 = exor(
      exor(exor(galois(bytes[3], 2), galois(bytes[0], 3)), bytes[1]),
      bytes[2]
    );

    result += r1 + r2 + r3 + r4;
  }
  return result;
}

// Inverse Mixing of Columns
function imixColumns(input) {
  let result = "";

  let words = ["", "", "", ""];

  for (let i = 0; i < 128; i += 32) {
    for (let j = i; j < i + 32; j++) {
      words[Math.floor(j / 32)] += input[j];
    }
  }

  for (let i = 0; i < 4; i++) {
    let bytes = ["", "", "", ""];
    for (let j = 0; j < 32; j += 8) {
      for (let k = j; k < j + 8; k++) {
        bytes[Math.floor(k / 8)] += words[i][k];
      }
    }
    let r1 = exor(
      exor(
        exor(igalois(bytes[0], 14), igalois(bytes[1], 11)),
        igalois(bytes[2], 13)
      ),
      igalois(bytes[3], 9)
    );
    let r2 = exor(
      exor(
        exor(igalois(bytes[0], 9), igalois(bytes[1], 14)),
        igalois(bytes[2], 11)
      ),
      igalois(bytes[3], 13)
    );
    let r3 = exor(
      exor(
        exor(igalois(bytes[0], 13), igalois(bytes[1], 9)),
        igalois(bytes[2], 14)
      ),
      igalois(bytes[3], 11)
    );
    let r4 = exor(
      exor(
        exor(igalois(bytes[0], 11), igalois(bytes[1], 13)),
        igalois(bytes[2], 9)
      ),
      igalois(bytes[3], 14)
    );

    result += r1 + r2 + r3 + r4;
  }
  return result;
}

// AES Encryption
function aesEncrypt(plaintext, key) {
    let state = plaintext;

    // Initial Round Key Addition
    state = exor(state, key);

    for (let round = 1; round <= 10; round++) {
        // Substitution of Bytes
        state = subbyte(state);

        // Shifting of Rows
        state = shiftRows(state);

        // Mixing of Columns
        if (round < 10) {
            state = mixColumns(state);
        }

        // Add Round Key
        state = exor(state, keyGen(key, round));
    }

    return state;
}

// AES Decryption
function aesDecrypt(ciphertext, key) {
    let state = ciphertext;
    
    for (let round = 10; round >= 1; round--) {
        // Initial Round Key Addition
        state = exor(state, keyGen(key, round));
        
        // Inverse Mixing of Columns
        if (round < 10) {
            state = imixColumns(state);
        }
        
        // Inverse Shifting of Rows
        state = ishiftRows(state);
        
        // Inverse Substitution of Bytes
        state = isubbyte(state);
    }

    // Add Round Key
    state = exor(state, key);
    
    return state;
}

// AES Encryption wrappers
function aesEncryptWrapper(plaintext, key) {
  let input = stringToBits(plaintext);
  const expandedKey = keyExp(stringToBits(key));
  let output = "";
  let zpad = 0;
  const n = input.length;
  
  if (n % 128) {
    zpad = 128 - (n % 128);
  }
    
  while (zpad--) {
        output += '0';
      }
      
      for (let i = 0; i < n; i++) {
        output += input[i];
    }
    
    const sz = Math.ceil(output.length / 128);
    const plainTextBlocks = [];
    
    for (let i = 0; i < n; i += 128) {
        const temp = output.substring(i, i + 128);
        plainTextBlocks.push(temp);
      }
      
      let result = "";
      for (let i = 0; i < sz; i++) {
        result += aesEncrypt(plainTextBlocks[i], expandedKey, 10);
      }
      
      return bitsToString(result);
    }
    
// AES Decryption wrappers
function aesDecryptWrapper(ciphertext, key) {
    let input = stringToBits(ciphertext);
    const expandedKey = keyExp(stringToBits(key));
    const n = input.length;
    const cipherTextBlocks = [];
    
    for (let i = 0; i < n; i += 128) {
      const temp = input.substring(i, i + 128);
      cipherTextBlocks.push(temp);
    }
    
    let result = "";
    for (let i = 0; i < n / 128; i++) {
      result += aesDecrypt(cipherTextBlocks[i], expandedKey, 10);
    }
    
    return bitsToString(result);
}

// let msg = "Two One Nine Two Two One Nine Two Two One ", key = "Thats my Kung Fu Thats my Kung Fu Thats my ";

// let encrypted = aesEncryptWrapper(msg, key);
// let decrypted = aesDecryptWrapper(encrypted, key);

// console.log(encrypted);
// console.log(decrypted);

export {aesDecryptWrapper, aesEncryptWrapper};

