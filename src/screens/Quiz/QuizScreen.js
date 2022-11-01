

import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, StyleSheet, RefreshControl } from 'react-native'
import { COLORS, SIZES } from './colorTheme'
import { questions } from './Data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Correct from '../../../assets/images/correct.png'
import Wrong from '../../../assets/images/wrong.png'


const QuizScreen = () => {

    const allQuestions = questions;
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
    const [currentSelectedOption, setCurrentSelectedOption] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
    }, []);

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionNumber]['correct_option'];
        setCurrentSelectedOption(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption == correct_option){
            setScore(score + 1)
        }
        setShowNextButton(true)
    }
    const handleNext = () => {
        if(currentQuestionNumber == allQuestions.length - 1) {
            setShowScoreModal(true)
        } else{
            setCurrentQuestionNumber(currentQuestionNumber + 1);
            setCurrentSelectedOption(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionNumber + 1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionNumber(0);
        setScore(0);

        setCurrentSelectedOption(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const renderQuestion = () => {
        return (
            <View style={styles.marginVerticall}>
                <View style={styles.questionCountContainer}>
                    <Text style={styles.questionCount1}>{currentQuestionNumber + 1}</Text>
                    <Text style={styles.questionCount2}>/ {allQuestions.length}</Text>
                </View>
                <Text style={styles.quesitonFont}>{allQuestions[currentQuestionNumber]?.question}</Text>
            </View>
        )
    }

    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionNumber]?.options.map(option => (
                        <TouchableOpacity 
                            onPress={()=> validateAnswer(option)}
                            disabled={isOptionsDisabled}
                            key={option}
                            style={{
                                borderWidth: 3, 
                                borderColor: option==correctOption 
                                ? COLORS.success
                                : option==currentSelectedOption 
                                ? COLORS.error 
                                : COLORS.secondary+'40',
                                backgroundColor: option==correctOption 
                                ? COLORS.success +'20'
                                : option==currentSelectedOption 
                                ? COLORS.error +'20'
                                : COLORS.secondary+'20',
                                height: 60, borderRadius: 20,
                                flexDirection: 'row',
                                alignItems: 'center', justifyContent: 'space-between',
                                paddingHorizontal: 20,
                                marginVertical: 10
                            }}
                        >
                            <Text style={styles.questionText}>{option}</Text>
                            {
                                option==correctOption ? (
                                    <View style={styles.correctContainer}>
                                        <Image source={Correct} style={styles.checkIcon} />
                                    </View>
                                ): option == currentSelectedOption ? (
                                    <View style={styles.wrongContainer}>
                                        <Image source={Wrong} style={styles.closeIcon} />
                                    </View>
                                ) : null
                            }

                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if(showNextButton){
            return (
                <TouchableOpacity
                onPress={handleNext}
                style={styles.nextContainer}>
                    <Text style={styles.nextButton}>Next</Text>
                </TouchableOpacity>
            )
        }else{
            return null
        }
    }


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={styles.progressBarContainer}>
                <Animated.View style={[styles.progressBar,{
                    width: progressAnim
                }]}>
                </Animated.View>
            </View>
        )
    }


    return (
       <SafeAreaView style={styles.renderContainer}>
           <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
           <View 
           style={styles.backColor}
           refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
           >
               {renderProgressBar()}
               {renderQuestion()}
               {renderOptions()}
               {renderNextButton()}
               <Modal
                animationType="slide"
                transparent={true}
                visible={showScoreModal}
               >
                   <View style={styles.summaryContainer}>
                       <View style={styles.endContainer}>
                           <Text style={styles.endText}>{ score > (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>
                           <View style={styles.scoreContainer}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score> (allQuestions.length/2) ? COLORS.success : COLORS.error
                               }}>{score}</Text>
                                <Text style={styles.correctFont}>/ { allQuestions.length }</Text>
                           </View>
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={styles.retryQuizButton}>
                               <Text style={styles.retryFont}>Retry Quiz</Text>
                           </TouchableOpacity>
                       </View>
                   </View>
               </Modal>
           </View>
       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    marginVerticall: {
        marginVertical: 40
    },
    questionCountContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    questionCount1: {
        color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2
    },
    questionCount2: {
        color: COLORS.white, fontSize: 20, opacity: 0.6
    },
    quesitonFont: {
        color: COLORS.white,
        fontSize: 30
    },
    questionText: {
        fontSize: 20, color: COLORS.white
    },
    correctContainer: {
        color: COLORS.white,
        fontSize: 20
    },
    checkIcon: {
        color: COLORS.white,
        fontSize: 20
    },
    wrongContainer: {
        width: 30, height: 30, borderRadius: 30/2,
        backgroundColor: COLORS.error,
        justifyContent: 'center', alignItems: 'center'
    },
    closeIcon: {
        color: COLORS.white,
        fontSize: 20
    },
    nextContainer: {
        marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5
    },
    nextButton: {
        fontSize: 20, color: COLORS.white, textAlign: 'center'
    },
    progressBarContainer: {
        width: '100%',
        height: 20,
        borderRadius: 20,
        backgroundColor: '#00000020',
    },
    progressBar: {
        height: 20,
        borderRadius: 20,
        backgroundColor: COLORS.accent
    },
    renderContainer: {
        flex: 1
    },
    backColor: {
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 16,
        backgroundColor: COLORS.background,
        position:'relative'
    },
    endText: {
        fontSize: 30, fontWeight: 'bold'
    },
    summaryContainer: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    endContainer: {
        backgroundColor: COLORS.white,
        width: '90%',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center'
    },
    scoreContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 20
    },
    correctFont: {
        fontSize: 20, color: COLORS.black
    },
    retryQuizButton: {
        backgroundColor: COLORS.accent,
        padding: 20, width: '100%', borderRadius: 20
    },
    retryFont: {
        textAlign: 'center', color: COLORS.white, fontSize: 20
    },
  })
  
export default QuizScreen