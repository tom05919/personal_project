import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Title } from 'react-native-paper'

/**
 * @param {Props}
 */

type Props = {
    title: string;
};

const Flipcard = React.FC<Props> = ({title}) => {
    return <Card>
        <Card.Content>
            <Title>{title}</Title>
            <Text></Text>
        </Card.Content>
    </Card>
}

export default function Flipcard() 

const styles = StyleSheet.create({})