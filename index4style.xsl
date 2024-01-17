<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
    <html>
        <body>
            <table border="3" width="100%" height="40%">
                <!-- THEAD -->
                <thead bgcolor="yellow">
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>AGE</td>
                        <td>EMAIL</td>
                        <td>SEMESTER</td>
                    </tr>
                </thead>
                <!-- TBODY -->
                <tbody bgcolor="pink">
                    <xsl:for-each select="students/student">

                     <!-- if condition -->
                    <!-- <xsl:if test="name &#61; 'rabiya'">
                    <xsl:if test="email &#61; 'rabiya'"/> -->

                     <!-- sort condition -->
                       <!-- name sequence-->
                    <xsl:sort select="name"/> 
                       <!-- age sequence  -->
                    <!-- <xsl:sort select="age" data-type="number"/> -->
                    <tr>
                        <td><xsl:value-of select="id" /></td>
                        <td><xsl:value-of select="name" /></td>
                        <td><xsl:value-of select="age" /></td>
                        <td><xsl:value-of select="email" /></td>
                        <td><xsl:value-of select="semester" /></td>
                    </tr>
                    <!-- </xsl:if> -->
                    </xsl:for-each>
                </tbody>
            </table>
        </body>
    </html>
    </xsl:template>
</xsl:stylesheet>