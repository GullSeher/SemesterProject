// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const QuizScreen = () => {
//     const navigation = useNavigation();

//     const categories = [
//         { name: 'Urdu', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Nuskaha-e-Hamidiyya.jpg' },
//         { name: 'Turkish', image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Irk_bitig_07.jpg' },
//         { name: 'Japanese', image: 'https://cdn.britannica.com/45/63145-004-B508A2A5/Japanese-kana-symbols.jpg' },
//         { name: 'Arabic', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Learning_Arabic_calligraphy.jpg' },
//         { name: 'Hindi', image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Hindi_pic.jpg' }
//     ];

//     const renderCategoryButton = (category) => (
//         <TouchableOpacity
//             key={category.name}
//             style={styles.categoryButton}
//             onPress={() => navigation.navigate('Playground', { category: category.name })}>
//             <ImageBackground source={{ uri: category.image }} style={styles.categoryImage}>
//                 <Text style={styles.categoryText}>{category.name}</Text>
//             </ImageBackground>
//         </TouchableOpacity>
//     );

//     return (
//         <ImageBackground
//             source={{ uri: 'https://i.pinimg.com/564x/ca/4c/0d/ca4c0d22880e8ab951b85a204ea64ea0.jpg' }}
//             style={styles.background}>
//             <View style={styles.container}>
//             <Text style={styles.Text}>Quizzes</Text>
//                 <Text style={styles.quizText}>Test your abilities here and discover your strengths!</Text>
//                 <View style={styles.categoryContainer}>
//                     {categories.map(renderCategoryButton)}
//                 </View>
//             </View>
//         </ImageBackground>
//     );
// }

// export default QuizScreen;

// const styles = StyleSheet.create({
//     background: {
//         flex: 1,
//         resizeMode: 'cover', // or 'stretch'
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0,0,0,0.5)', // Add opacity to the background
//     },
//     Text:{
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: 'red',
//         textAlign: 'center',
//         marginTop:50,
//         marginBottom: 2,
//         textShadowColor: 'rgba(0, 0, 0, 0.75)',
//         textShadowOffset: { width: -1, height: 1 },
//         textShadowRadius: 10,
//     },
//     quizText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: 'white',
//         textAlign: 'center',
//         marginTop:5,
//         marginBottom: 2,
//         textShadowColor: 'rgba(0, 0, 0, 0.75)',
//         textShadowOffset: { width: -1, height: 1 },
//         textShadowRadius: 10,
//     },
//     categoryContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     categoryButton: {
//         width: 150,
//         height: 150,
//         borderRadius: 20,
//         overflow: 'hidden',
//         margin: 10,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 4,
//         },
//         shadowOpacity: 0.3,
//         shadowRadius: 5,
//         elevation: 5,
//     },
//     categoryImage: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         padding: 10,
//     },
//     categoryText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'white',
//         textAlign: 'center',
//         textShadowColor: 'rgba(0, 0, 0, 0.75)',
//         textShadowOffset: { width: -1, height: 1 },
//         textShadowRadius: 10,
//     },
// });
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigateToCategory } from '../customhooks/useNavigateToCategory';
import CategoryButton from '../customhooks/CategoryButton';
import styles from '../customhooks/styles';

const categories = [
    { name: 'Urdu', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Nuskaha-e-Hamidiyya.jpg' },
    { name: 'Turkish', image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Irk_bitig_07.jpg' },
    { name: 'Japanese', image: 'https://cdn.britannica.com/45/63145-004-B508A2A5/Japanese-kana-symbols.jpg' },
    { name: 'Arabic', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Learning_Arabic_calligraphy.jpg' },
    { name: 'Hindi', image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Hindi_pic.jpg' }
];

const QuizScreen = () => {
    const navigateToCategory = useNavigateToCategory();

    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/564x/ca/4c/0d/ca4c0d22880e8ab951b85a204ea64ea0.jpg' }}
            style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.text}>Quizzes</Text>
                <Text style={styles.quizText}>Test your abilities here and discover your strengths!</Text>
                <View style={styles.categoryContainer}>
                    {categories.map((category) => (
                        <CategoryButton key={category.name} category={category} onPress={navigateToCategory} />
                    ))}
                </View>
            </View>
        </ImageBackground>
    );
}

export default QuizScreen;
