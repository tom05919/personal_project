

import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, Animated, StyleSheet } from 'react-native'
import { COLORS, SIZES } from './colorTheme'
import data from './data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const QuizScreen = () => {

    const allQuestions = data;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0)
    const [showNextButton, setShowNextButton] = useState(false)
    const [showScoreModal, setShowScoreModal] = useState(false)

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }
    const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1) {
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        } else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }
    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
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
            <View style={styles.marginverticall}>
                {/* Question Counter */}
                <View style={styles.questioncountgood}>
                    <Text style={styles.questioncount1}>{currentQuestionIndex+1}</Text>
                    <Text style={styles.questioncount2}>/ {allQuestions.length}</Text>
                </View>

                {/* Question */}
                <Text style={styles.quesitonfont}>{allQuestions[currentQuestionIndex]?.question}</Text>
            </View>
        )
    }

    const renderOptions = () => {
        return (
            <View>
                {
                    allQuestions[currentQuestionIndex]?.options.map(option => (
                        <TouchableOpacity 
                        onPress={()=> validateAnswer(option)}
                        disabled={isOptionsDisabled}
                        key={option}
                        style={{
                            borderWidth: 3, 
                            borderColor: option==correctOption 
                            ? COLORS.success
                            : option==currentOptionSelected 
                            ? COLORS.error 
                            : COLORS.secondary+'40',
                            backgroundColor: option==correctOption 
                            ? COLORS.success +'20'
                            : option==currentOptionSelected 
                            ? COLORS.error +'20'
                            : COLORS.secondary+'20',
                            height: 60, borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between',
                            paddingHorizontal: 20,
                            marginVertical: 10
                        }}
                        >
                            <Text style={styles.test321}>{option}</Text>

                            {/* Show Check Or Cross Icon based on correct answer*/}
                            {
                                option==correctOption ? (
                                    <View style={styles.correctops}>
                                        <MaterialCommunityIcons name="check" style={styles.checkmatcom} />
                                    </View>
                                ): option == currentOptionSelected ? (
                                    <View style={styles.optionsel}>
                                        <MaterialCommunityIcons name="close" style={styles.matcomicon} />
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
                style={styles.touchopaznext}>
                    <Text style={styles.touchopaz}>Next</Text>
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
            <View style={styles.barprogresssss}>
                <Animated.View style={[styles.animatedviewss,{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


    return (
       <SafeAreaView style={styles.literallyflex1}>
           <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
           <View style={styles.backcolor}>

               {/* ProgressBar */}
               { renderProgressBar() }

               {/* Question */}
               {renderQuestion()}

               {/* Options */}
               {renderOptions()}

               {/* Next Button */}
               {renderNextButton()}

               {/* Score Modal */}
               <Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={styles.centeredscrmod}>
                       <View style={styles.widthandscormod}>
                           <Text style={styles.test123}>{ score> (allQuestions.length/2) ? 'Congratulations!' : 'Oops!' }</Text>

                           <View style={styles.scrmodfont}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score> (allQuestions.length/2) ? COLORS.success : COLORS.error
                               }}>{score}</Text>
                                <Text style={styles.scoreblackcolor}>/ { allQuestions.length }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                           onPress={restartQuiz}
                           style={styles.restartquizboarder}>
                               <Text style={styles.retryquizfont}>Retry Quiz</Text>
                           </TouchableOpacity>

                       </View>

                   </View>
               </Modal>

               {/* Background Image */}
               <Image
                source={'.../assets/images/dots.png'}
                style={styles.end}
                resizeMode={'contain'}
                />

           </View>
       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 20,
    },
    marginverticall: {
            marginVertical: 40
    },
    questioncountgood: {
            flexDirection: 'row',
            alignItems: 'flex-end'
    },
    questioncount1: {
            color: COLORS.white, fontSize: 20, opacity: 0.6, marginRight: 2
    },
    questioncount2: {
            color: COLORS.white, fontSize: 18, opacity: 0.6
    },
    quesitonfont: {
            color: COLORS.white,
            fontSize: 30
    },
    test321: {
            fontSize: 20, color: COLORS.white
    },
    correctops: {
            color: COLORS.white,
            fontSize: 20
    },
    checkmatcom: {
            color: COLORS.white,
            fontSize: 20
    },
    optionsel: {
            width: 30, height: 30, borderRadius: 30/2,
            backgroundColor: COLORS.error,
            justifyContent: 'center', alignItems: 'center'
    },
    matcomicon: {
            color: COLORS.white,
            fontSize: 20
    },
    touchopaznext: {
            marginTop: 20, width: '100%', backgroundColor: COLORS.accent, padding: 20, borderRadius: 5
    },
    touchopaz: {
            fontSize: 20, color: COLORS.white, textAlign: 'center'
    },
    barprogresssss: {
            width: '100%',
            height: 20,
            borderRadius: 20,
            backgroundColor: '#00000020',
    },
    animatedviewss: {
            height: 20,
            borderRadius: 20,
            backgroundColor: COLORS.accent
    },
    literallyflex1: {
            flex: 1
    },
    backcolor: {
            flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 16,
            backgroundColor: COLORS.background,
            position:'relative'
    },
    test123: {
        fontSize: 30, fontWeight: 'bold'
    },
    centeredscrmod: {
            flex: 1,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center'
    },
    widthandscormod: {
            backgroundColor: COLORS.white,
            width: '90%',
            borderRadius: 20,
            padding: 20,
            alignItems: 'center'
    },
    scrmodfont: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginVertical: 20
    },
    scoreblackcolor: {
            fontSize: 20, color: COLORS.black
    },
    restartquizboarder: {
            backgroundColor: COLORS.accent,
            padding: 20, width: '100%', borderRadius: 20
    },
    retryquizfont: {
            textAlign: 'center', color: COLORS.white, fontSize: 20
    },
    end: {
            width: SIZES.width,
            height: 130,
            zIndex: -1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.5
    },

  })
  
export default QuizScreen