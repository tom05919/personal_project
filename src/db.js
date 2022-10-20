import firestore from '@react-native-firebase/firestore';

export const createQuiz = (currentQuizId, title, description) => {
    return firestore().collection('QuizItems').doc(currentQuizId).set({
        title,
        description,
    })
}