// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

// export default function App() {
//   const [emri, setEmri] = useState("");
//   const [mbiemri, setMbiemri] = useState("");

//   const dergoTeDhenat = () => {
//     if (emri === "" || mbiemri === "") {
//       alert("Ju lutem plotesoni te gjitha fushat");
//       return;
//     }

//     alert(`Mire se erdhe ${emri} ${mbiemri}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Forma me validim</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Emri"
//         value={emri}
//         onChangeText={setEmri}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Mbiemri"
//         value={mbiemri}
//         onChangeText={setMbiemri}
//       />

//       <Button title="Dergo" onPress={dergoTeDhenat} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 22,
//     marginBottom: 20,
//     textAlign: "center",
//     fontWeight: "bold",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#999",
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 15,
//   },
// });



import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [emri, setEmri] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [rezultati, setRezultati] = useState("");

  const kalkuloMesataren = () => {
    let n1 = Number(nota1);
    let n2 = Number(nota2);
    let n3 = Number(nota3);

    if (emri === "" || nota1 === "" || nota2 === "" || nota3 === "") {
      setRezultati("Ju lutem plotesoni te gjitha fushat.");
      return;
    }

    let mesatarja = (n1 + n2 + n3) / 3;

    if (mesatarja >= 1.5) {
      setRezultati(
        `${emri}, mesatarja juaj eshte ${mesatarja.toFixed(2)}. Ju keni kaluar.`
      );
    } else {
      setRezultati(
        `${emri}, mesatarja juaj eshte ${mesatarja.toFixed(2)}. Ju nuk keni kaluar.`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kalkulimi i Notes Mesatare</Text>

      <TextInput
        style={styles.input}
        placeholder="Shkruaj emrin"
        value={emri}
        onChangeText={setEmri}
      />

      <TextInput
        style={styles.input}
        placeholder="Shkruaj noten e pare"
        value={nota1}
        onChangeText={setNota1}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Shkruaj noten e dyte"
        value={nota2}
        onChangeText={setNota2}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Shkruaj noten e trete"
        value={nota3}
        onChangeText={setNota3}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={kalkuloMesataren}>
        <Text style={styles.buttonText}>Llogarit</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{rezultati}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2e86de",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});