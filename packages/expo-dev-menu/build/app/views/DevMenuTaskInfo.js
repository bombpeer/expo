import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import DevIndicator from '../components/DevIndicator';
import { StyledText } from '../components/Text';
class DevMenuTaskInfo extends React.PureComponent {
    renderDevIndicator() {
        const { task } = this.props;
        const devServerName = task?.manifest?.developer?.tool;
        if (devServerName) {
            return React.createElement(DevIndicator, { style: styles.taskDevServerIndicator, isActive: true, isNetworkAvailable: true });
        }
        return null;
    }
    render() {
        const { task } = this.props;
        if (!task) {
            return null;
        }
        const taskUrl = task.manifestUrl ?? '';
        const iconUrl = task.manifest && task.manifest.iconUrl;
        const taskName = task.manifest && task.manifest.name;
        const taskNameStyles = taskName ? styles.taskName : [styles.taskName, { color: '#c5c6c7' }];
        const sdkVersion = task.manifest && task.manifest.sdkVersion;
        return (React.createElement(View, { style: styles.taskMetaRow },
            React.createElement(View, { style: styles.taskIconColumn }, iconUrl ? (React.createElement(Image, { source: { uri: iconUrl }, style: styles.taskIcon })) : (React.createElement(View, { style: [styles.taskIcon, { backgroundColor: '#eee' }] }))),
            React.createElement(View, { style: styles.taskInfoColumn },
                React.createElement(StyledText, { style: taskNameStyles, numberOfLines: 1 }, taskName ? taskName : 'Untitled project'),
                React.createElement(View, { style: styles.taskDevServerRow },
                    this.renderDevIndicator(),
                    React.createElement(Text, { style: [styles.taskUrl], numberOfLines: 1 }, taskUrl.replace(/^\w+:\/\//, ''))),
                sdkVersion && React.createElement(StyledText, { style: styles.taskSdkVersion },
                    "SDK: ",
                    sdkVersion))));
    }
}
const styles = StyleSheet.create({
    taskMetaRow: {
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingBottom: 12,
    },
    taskInfoColumn: {
        flex: 4,
        justifyContent: 'center',
    },
    taskIconColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskName: {
        backgroundColor: 'transparent',
        fontWeight: '700',
        fontSize: 16,
        marginTop: 14,
        marginBottom: 1,
        marginRight: 24,
    },
    taskUrl: {
        backgroundColor: 'transparent',
        marginRight: 16,
        marginBottom: 2,
        marginTop: 1,
        fontSize: 11,
    },
    taskSdkVersion: {
        fontSize: 11,
    },
    taskIcon: {
        width: 52,
        height: 52,
        marginTop: 12,
        marginRight: 10,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
    },
    taskDevServerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskDevServerIndicator: {
        marginRight: 5,
    },
});
export default DevMenuTaskInfo;
//# sourceMappingURL=DevMenuTaskInfo.js.map