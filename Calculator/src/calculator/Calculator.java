/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculator;

import javax.swing.JOptionPane;
/**
 *
 * @author ShilaCasteels
 */
public class Calculator {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
    String input1, input2, operationinput;
    double x1, x2;
    
    input1 = JOptionPane.showInputDialog("Please Enter your first input number: ");
    operationinput = JOptionPane.showInputDialog("Please enter the math operation you want to use: *,/,+,- ");
    input2 = JOptionPane.showInputDialog("Please Enter your second input number: ");
    
    x1 = Double.parseDouble(input1);
    x2 = Double.parseDouble(input2);
    
    switch(operationinput){
        case "*":
            JOptionPane.showMessageDialog(null,"The product of your input is: " + (x1*x2));
            break;
        case "/":
            JOptionPane.showMessageDialog(null,"The deviation of your input is: " + (x1/x2));
            break;
        case "+":
            JOptionPane.showMessageDialog(null, "The sum of your input is: "+(x1+x2));
            break;
        case "-":
            JOptionPane.showMessageDialog(null, "The difference between your input is: " + (x1-x2));
            break;
        default:
            JOptionPane.showMessageDialog(null, "You did not enter the requested input correctly");
    }
    }
    
}
